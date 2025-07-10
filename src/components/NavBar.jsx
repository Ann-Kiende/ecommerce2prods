import React, { useState } from 'react';
import './NavBar.css';
import smalllogo2 from '../assets/smalllogo2.png';
import { FaBars } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    //   const toggleMenu = () => {
    //     setIsOpen((prev) => !prev);
  };

  return (
    <div className='NavBar'>
      {/* Logo */}
      <a href='/' className='logo'>
        <img src={smalllogo2}></img>
      </a>

      {/* Desktop Nav  */}
      <div className={isOpen ? 'nav-links active' : 'nav-links'}>
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
      <div className='hamburger' onClick={toggleMenu}>
        {isOpen ? <MdClose /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;
