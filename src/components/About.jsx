import React from 'react';
import { Link } from 'react-router-dom';
import founder from '../assets/about/founder.jpg';
import ingredients from '../assets/about/ingredients.jpg';
import signature from '../assets/about/signature.png';
import workshop from '../assets/about/workshop.jpg';

const About = () => {
  return (
    <>
      <div>
        <h1>Our Story</h1>
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
        <img src={founder} alt='Founder' />
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
        <p>
          Each [product] is crafted over [time period] using [unique method].
        </p>
        <div className='process-steps'>
          <div>1. Ingredient Sourcing</div>
          <div>2. Handcrafting</div>
          <div>3. Quality Check</div>
        </div>
      </div>

      <div className='founder-note'>
        <blockquote>
          "I started making [products] after [personal story]. What began as
          [hobby/need] grew into a passion for sharing wellness."
          <cite>— Ann Kiende, Founder</cite>
        </blockquote>
        <img src={signature} alt='Signature' className='signature' />
      </div>

      <div className='about-gallery'>
        <img src={workshop} alt='Workspace' />
        <img src={ingredients} alt='Fresh Ingredients' />
      </div>

      <div className='about-cta'>
        <h3>Ready to Experience [Product]?</h3>
        {/* <Link to='/card' className='cta-button'>
          Shop Now
        </Link> */}
      </div>
    </>
  );
};

export default About;
