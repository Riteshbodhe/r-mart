import React, { useState } from 'react';
import './Login.css'
import logo2 from "./img/logo2.png"
import { Link, useNavigate  } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))

    }
     
    const register = e => {
        e.preventDefault();
        
          createUserWithEmailAndPassword(auth,email,password)
          .then((auth) =>{
            //create new user with email and password
             
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    //src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    src={logo2} alt=""
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    <h3>DemoEmail = testuser@r-mart.com</h3>
                    <h3>Password = Test@123</h3>
                    By signing-in you agree to the R-MART Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login