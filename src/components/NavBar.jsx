import React from 'react';
import './NavBar.css';
import smalllogo from '../assets/smalllogo.png';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='logo'>
        <img src={smalllogo}></img>
      </div>
    </div>
  );
};

export default NavBar;
