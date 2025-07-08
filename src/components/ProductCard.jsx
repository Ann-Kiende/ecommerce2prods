import React from 'react';
import Image from '../assets/cuticle oils/cherry.JPG';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className='product_box'>
      <img src={props.image} alt={props.alt} />
      <div className='description'>
        <h2>{props.name}</h2>
        <p className='price'>
          {props.dis_price}
          <span>{props.price}</span>{' '}
        </p>
        <p className='para'>{props.description}</p>
        <button className='btn-buynow'>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
