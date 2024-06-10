import React, {HTMLInputTypeAttribute} from 'react';
import styles from './input.module.scss';

interface InputProps {
    type: HTMLInputTypeAttribute,
    id: string,
    name: string,
    label: string
}

const Input: React.FC<InputProps> = ({
                                         type,
                                         label,
                                         name,
                                         id
                                     }) => {

    return (
        <>
            <input type={type} id={id} name={name}/>
            <label htmlFor={id}>{label}</label>
        </>
    );
};

export default Input;
