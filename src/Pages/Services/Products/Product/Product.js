import React from 'react';
import './Product.css'

const Product = (props) => {
    const{ name, img, description, price}=props.product;
    return (
        <div class="col text-center">
    <div class="card h-100 product-card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fs-4 fw-bold">{name}</h5>
        <p class="card-text">{description}</p>
        <p className='price '>{price}</p>
      </div>
      <div className="card-body">
          <button className='order-btn'>ORDER NOW</button>
          <button><i class="fa-solid fa-cart-plus"></i></button>
      </div>
      <div class="card-footer d-flex justify-content-evenly">
        <small class="text-muted">serving time</small>
        <small class="text-muted">home</small>
      </div>
    </div>
  </div>
    );
};

export default Product;