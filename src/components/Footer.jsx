import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa6';
import { FaCcMastercard } from 'react-icons/fa6';
import { FaCcPaypal } from 'react-icons/fa';
import './Footer.css';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      {/* Quick Links */}
      <div className='footer-section'>
        <h3>Shop</h3>
        <ul>
          <li>
            <NavLink to='/products'>All Products</NavLink>
          </li>
          <li>
            <NavLink to='/'>Special Offers</NavLink>
          </li>
        </ul>
        <div className='payment-methods'>
          <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal />
        </div>
      </div>

      {/* Customer Service / Help */}
      <div className='footer-section'>
        <h3>Help</h3>
        <ul>
          <li>
            <NavLink to='/shipping'>Shipping Policy</NavLink>
          </li>
          <li>
            <NavLink to='/refundspolicy'>Refunds & Exchanges</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
        </ul>
      </div>

      {/* Company Info */}
      <div className='footer-section'>
        <h3>Our Company</h3>
        <ul>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
          <li>
            <a href='/blog'>Blog</a>
          </li>
          <li>
            <NavLink to='/privacy'>Privacy Policy</NavLink>
          </li>
        </ul>
      </div>

      {/* Newsletter & Social */}
      <div className='footer-section'>
        <h3>Stay Connected</h3>
        <form className='newsletter-form'>
          <input type='email' placeholder='Your email' />
          <button type='submit'>Subscribe</button>
        </form>{' '}
        <div className='social-icons'>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaTiktok />
          </a>
          <a href='#'>
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} Haba Haba. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
