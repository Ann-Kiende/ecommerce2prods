import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import founder from '../assets/about/founder.jpeg';
import ingredients from '../assets/about/ingredients.jpg';
import signature from '../assets/about/signature.png';
import workshop from '../assets/about/workshop.jpg';
import './About.css';

const About = () => {
  return (
    <div className='about-card'>
      <div className='our-story'>
        <h1>Our Story</h1>
        <p>We are a one product store</p>
        <p>Small Batch • Handcrafted • Sustainably Sourced</p>
      </div>

      <div className='about-section'>
        <h2>Meet Haba Haba</h2>
        <p>
          Founded in 2025, we started with one simple mission:
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </p>
        <img className='founder about-img' src={founder} alt='Founder' />
      </div>

      <div className='about-section'>
        <h2>Why Our Products Stand Out</h2>
        <ul>
          <li>
            ✓ <strong>Handmade</strong> in small batches
          </li>
          <li>
            ✓ <strong>Natural Ingredients</strong> (list key ones like lavender,
            shea butter)
          </li>
          <li>
            ✓ <strong>Eco-Friendly</strong> packaging
          </li>
        </ul>
      </div>

      <div className='about-section'>
        <h2>From Our Hands to Yours</h2>
        <p>Each product is crafted over 6 months using our unique method.</p>
        <p>Ingredient Sourcing → Handcrafting → Quality Check</p>
      </div>

      <div className='founder-note'>
        <blockquote>
          "I started making cuticle oils after Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sit accusantium, atque laudantium
          commodi, sed explicabo consequuntur optio ut velit id et pariatur
          neque molestias. Magnam sequi ex quasi a fugit. What began as passion
          for nail manicures and pedicures grew into a passion for sharing
          cuticle health in your pocket."
          <img
            className='signature about-img'
            src={signature}
            alt='Signature'
          />
          <cite>Ann Kiende, Founder</cite>
        </blockquote>
      </div>

      <div className='about-gallery'>
        <img className='workshop about-img' src={workshop} alt='Workspace' />
        <img
          className='ingredients about-img'
          src={ingredients}
          alt='Fresh Ingredients'
        />
      </div>

      <div className='about-cta'>
        <h3>Ready to Experience our Products?</h3>
        <NavLink to='/products' className='cta-button'>
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};

export default About;
