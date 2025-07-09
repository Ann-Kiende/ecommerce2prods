import React, { useState } from 'react';
import './NavBar.css';
import smalllogo2 from '../assets/smalllogo2.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='NavBar'>
      {/* Logo */}
      <a href='/' className='logo'>
        <img src={smalllogo2}></img>
      </a>

      {/* Desktop Nav  */}
      <div className={`nav-links ${isMenuOpen ? 'mobile-visible' : ''}`}>
        {/* When isMenuOpen is true, the mobile-visible class is added */}
        <a href='/'>Home</a>
        <a href='/' className='active'>
          Products
        </a>
        <a href='/'>About</a>
      </div>

      {/* Right Side Nav */}
      <div className='nav-right'>
        <input type='text' name='' id='search-bar' placeholder='Search...' />
        <div className='cart'>
          🛍️<span>0</span>
        </div>
        <button className='login-btn'>Login</button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`hamburger ${isMenuOpen ? 'open' : ''}`} //   Toggles true/false
      >
        {/* ☰ */}
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  );
};

export default NavBar;
