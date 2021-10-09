import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_url = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(Redirect_url)
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login </h2>
                <form >
                    <input type="email" placeholder='Email' />
                    <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="submit" value="Login" />

                </form>
                <p>new to ema-john ? <Link to='/register'>Create Account</Link></p>
                <div>-----------or------------</div>
                <button onClick={handleGoogleLogin} className='card-btn'>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;