import React, { useState } from 'react';
import './NavBar.css';
import smalllogo2 from '../assets/smalllogo2.png';
import { FaBars } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
// import dropdown from './Dropdown';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className='NavBar'>
      {/* Logo */}
      <NavLink to='/' className='logo' onClick={closeMobileMenu}>
        <img alt='Haba Haba Logo' src={smalllogo2}></img>
      </NavLink>

      {/* Desktop Nav  */}
      <div className={isOpen ? 'nav-links active' : 'nav-links'}>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to='/products'
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMobileMenu}
          end
        >
          Products
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMobileMenu}
        >
          Help
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={closeMobileMenu}
        >
          About Us
        </NavLink>
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
