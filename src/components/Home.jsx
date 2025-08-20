import React from 'react';
import './Home.css';
import Hero from '../assets/home/cuticle-hero.jpg';

import DropDown from './dropdown';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero'>
        <img
          src={Hero}
          className='hero-image'
          alt='Haba Haba Cuticle Oil Pen'
          loading='lazy'
        />
        <div className='hero-content'>
          <h2 className='hero-title'>Nourish Your Nails Like Never Before</h2>
          <p className='hero-subtitle'>
            The Ultra-Hydrating Cuticle Oil for Strong, Glossy Nails.
          </p>
          <button className='cta-btn'>Shop Now</button>
          <p className='trust-badge'>Vegan • Cruelty-Free • Fast-Absorbing</p>
        </div>
      </div>

      <div className='benefits'>
        <div className='benefits-title'>
          <h2>Why Your Cuticles Will Love It</h2>
        </div>
        <div className='benefits-content'>
          <div className='benefits-icons'>
            <h4>Deep Hydration</h4>
            <p>Dries instantly—no greasy residue, just silky nails.</p>
          </div>
          <div className='benefits-icons'>
            <h4>Natural Ingredients</h4>
            <p>Jojoba oil, vitamin E & lavender for healthy nail beds.</p>
          </div>
          <div className='benefits-icons'>
            <h4>Salon-Worthy Shine</h4>
            <p>Get groomed running errands results in seconds.</p>
          </div>
        </div>
      </div>

      <div className='demo'>
        <h2 className='demo-title'>Glossier Nails in 3 Steps</h2>
        <ol className='how-to'>
          <li>Swab once to each cuticle.</li>
          <li>Massage gently for 10 seconds.</li>
          <li>Repeat daily for stronger nails.</li>
        </ol>

        <iframe
          width='100%'
          height='450'
          src='https://www.youtube.com/embed/X0vWXMnUxsw'
          title='Haba Haba Cuticle Oil Pen Demo'
          allow='fullscreen; picture-in-picture' //lets video go fullscreen
          loading='lazy'
        ></iframe>
      </div>

      <div className='social-proof'>
        <h2>Loved by Nail Enthusiasts</h2>
        <div className='reviews'>
          <div id='reviews-stars'>⭐⭐⭐⭐⭐</div>
          <div id='reviews-content'>
            "My nails have never looked better—worth every penny!"
          </div>
          <div id='reviews-name'>– Sarah T</div>
        </div>
        <div className='press'>
          <h3>As Seen In:</h3>
          <ul id='press-logos'>
            <li>Allure</li>
            <li>Nail Magazine</li>
            <li>Byrdie</li>
          </ul>
        </div>
      </div>

      <div className='pricing-offer'></div>

      <div className='faqs'>
        <DropDown
          title='How often should I use it?'
          list='Daily for best results—it takes 10 seconds!'
        />
        <DropDown
          title='Is it greasy?'
          list='Not at all! Our fast-absorbing formula sinks in instantly.'
        />
      </div>

      <div className='final-cta'>
        <h2>Ready for Healthier Nails?</h2>
        <h4 className='urgent-text'>
          Limited stock—treat your cuticles today.
        </h4>
        <button className='cta-btn'>Add to Cart</button>
        <h4 id='cta-bonus'>Offer a free nail file with first purchase</h4>
      </div>
    </div>
  );
};

export default Home;
