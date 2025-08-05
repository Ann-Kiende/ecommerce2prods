import React from 'react';
import NavBar from './NavBar';
import ProductCard from './ProductCard';
import App from '../App';
import About from './About';
import './ProductCard.css';
import cherry from '../assets/cuticle oils/cherry.JPG';
import lavender from '../assets/cuticle oils/lavender.JPG';
import orange from '../assets/cuticle oils/orange.JPG';
import pineapple from '../assets/cuticle oils/pineapple.JPG';
import watermelon from '../assets/cuticle oils/watermelon.JPG';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className='product'>
        <ProductCard
          image={cherry}
          alt='Cherry Cuticle Oil'
          name='Cherry'
          dis_price='KES 430'
          price='KES 550'
          description='Sweet and fruity moisture for soft, healthy cuticles'
        />
        <ProductCard
          image={watermelon}
          alt='Watermelon Cuticle Oil'
          name='Watermelon'
          dis_price='KES 430'
          price='KES 550'
          description='Light, fresh moisture with a summer-sweet watermelon aroma'
        />
        <ProductCard
          image={pineapple}
          alt='Pineapple Cuticle Oil'
          name='Pineapple'
          dis_price='KES 430'
          price='KES 550'
          description='Tropical hydration with a juicy, uplifting pineapple scent'
        />
        <ProductCard
          image={lavender}
          alt='Lavender Cuticle Oil'
          name='Lavender'
          dis_price='KES 430'
          price='KES 550'
          description='Calms your senses while deeply nourishing dry cuticles'
        />
        <ProductCard
          image={orange}
          alt='Orange Cuticle Oil'
          name='Orange'
          dis_price='KES 430'
          price='KES 550'
          description='Zesty citrus oil that refreshes and hydrates instantly'
        />
      </div>
    </>
  );
};

export default Card;
