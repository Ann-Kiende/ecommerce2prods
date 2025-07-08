import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';
import cherry from '../assets/cuticle oils/cherry.JPG';
import lavender from '../assets/cuticle oils/lavender.JPG';
import orange from '../assets/cuticle oils/orange.JPG';
import pineapple from '../assets/cuticle oils/pineapple.JPG';
import watermelon from '../assets/cuticle oils/watermelon.JPG';

const Card = () => {
  return (
    <div className='product'>
      <ProductCard
        image={cherry}
        alt='Cherry Cuticle Oil'
        name='Cherry'
        dis_price='KES 430'
        price='KES 550'
        description='Cherry Cuticle Oil'
      />
      <ProductCard
        image={watermelon}
        alt='Watermelon Cuticle Oil'
        name='Watermelon'
        dis_price='KES 430'
        price='KES 550'
        description='Watermelon Cuticle Oil'
      />
      <ProductCard
        image={pineapple}
        alt='Pineapple Cuticle Oil'
        name='Pineapple'
        dis_price='KES 430'
        price='KES 550'
        description='Pineapple Cuticle Oil'
      />
      <ProductCard
        image={lavender}
        alt='Lavender Cuticle Oil'
        name='Lavender'
        dis_price='KES 430'
        price='KES 550'
        description='Lavender Cuticle Oil'
      />
      <ProductCard
        image={orange}
        alt='Orange Cuticle Oil'
        name='Orange'
        dis_price='KES 430'
        price='KES 550'
        description='Orange Cuticle Oil'
      />
    </div>
  );
};

export default Card;
