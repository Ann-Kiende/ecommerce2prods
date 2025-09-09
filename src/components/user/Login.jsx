import React from 'react';
import { NavLink } from 'react-router-dom';
import './user.css';

const Login = () => {
  return (
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>
      <form className='login-form'>
        <input type='email' placeholder='Email' required />

        <input type='password' placeholder='Password' required />

        <button type='submit'>Login</button>
      </form>
      <p className='register-text'>
        Don’t have an account? <NavLink to='/register'>Register</NavLink>
      </p>
    </div>
  );
};

export default Login;
