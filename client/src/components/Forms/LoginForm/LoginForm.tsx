import React from 'react';
import styles from './loginform.module.scss';
import Button from "@/UI/Button/Button";
import Input from "@/UI/Input/Input";

interface LoginFormProps {

}

const LoginForm: React.FC<LoginFormProps> = ({}) => {

    return (
        <div className="login-form">
            <form>
                <div className="form-field">
                    <Input type="email"
                           id="email"
                           name="email"
                           label="Email"
                    />
                </div>
                <div className="form-field">
                    <Input type="password"
                           id="password"
                           name="password"
                           label="Password"
                    />
                </div>
                <div className="form-field">
                    <Button>
                        <span className="button-text">Send</span>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
