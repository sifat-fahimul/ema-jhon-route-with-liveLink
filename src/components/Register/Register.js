import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account </h2>
                <form >
                    <input type="email" name="" id="" placeholder='Email' /> <br />
                    <input type="password" placeholder='Password' />
                    <br />
                    <input type="password" placeholder='Re-enter Password' /><br />
                    <input type="submit" value="Register" />

                </form>
                <p>Already have an Account ? <Link to='/login'>Login</Link></p>
                <div>-------------or--------------</div>
                <button className='card-btn'>Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;