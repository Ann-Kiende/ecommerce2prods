import React from 'react';
import { NavLink } from 'react-router-dom';
import './user.css';

const Register = () => {
  return (
    <div className='login-container'>
      <h2 className='login-title'>Register</h2>
      <form className='login-form'>
        <input type='text' placeholder='Full Name' required />

        <input type='email' placeholder='Email' required />

        <input type='password' placeholder='Password' required />

        <input type='password' placeholder='Confirm Password' required />

        <button type='submit'>Register</button>

        {/* 👉 Link back to login */}
        <p className='register-text'>
          Already have an account? <NavLink to='/login'>Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
