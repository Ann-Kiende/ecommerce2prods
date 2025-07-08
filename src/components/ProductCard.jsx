import React from 'react';
import Image from '../assets/cuticle oils/cherry.JPG';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className='product_box'>
      <img src={Image} alt='Cherry Cuticle Oil' />
      <div className='description'>
        <h2>Cherry</h2>
        <p className='price'>
          KES 430 <span>KES 550</span>{' '}
        </p>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur.
        </p>
        <button className='btn-buynow'>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
