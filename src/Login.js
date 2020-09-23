import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // logic for login button in login page
    const signIn = e => {
        e.preventDefault();
        ///some fancy firebase login 
        auth.
            signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    //logic for register button in login page
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //this means successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //do some firebase register
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=" "
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    {/* everytime a email is typed the event raises and maps the email to the value from target.value. */}
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                        className="login__signInButton">Sign in</button>
                </form>
                <p>
                    By signing-in you agree to Amazon CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                    </p>
                <button onClick={register}
                    className="login__registerButton">Create your Amazon account
                    </button>
            </div>
        </div>
    )
}

export default Login
