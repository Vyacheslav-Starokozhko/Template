import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import rootSaga from './sagas'
import counterSlice from './slices/counterSlice'
import createWebStorage from "redux-persist/lib/storage/createWebStorage";


const createNoopStorage = () => {
    return {
        getItem(_key:any) {
            return Promise.resolve(null);
        },
        setItem(_key:any, value:any) {
            return Promise.resolve(value);
        },
        removeItem(_key:any) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();






const persistConfig = {
    key: 'root',
    storage:storage,
    blacklist: [

    ]
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    counter: counterSlice
})


//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                thunk: true,
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                }
            }
        ).concat([
            sagaMiddleware
        ]),
});



sagaMiddleware.run(rootSaga);


// Infer the type of makeStore

export const persistor = persistStore(store)
//@ts-ignore
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
