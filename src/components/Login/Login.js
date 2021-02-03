import React from 'react';
//style
import './style/Login.css';
//comp
import {auth, provider} from '../../firebase';
import { Button } from '@material-ui/core';

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                className="login__image" 
                src="https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif"
                alt="Flavicom"/>
            </div>
            <Button onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;