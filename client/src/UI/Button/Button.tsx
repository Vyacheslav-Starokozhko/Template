import React from 'react';
import styles from './button.module.scss';
interface ButtonProps {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children}) => {

    return (
        <>
            <button>
                {children}
            </button>
        </>
    );
};

export default Button;
