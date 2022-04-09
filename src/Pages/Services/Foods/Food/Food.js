import React from 'react';
import { NavLink } from 'react-router-dom';


const Food = (props) => {
    const{_id, name, img, description, price}=props.food;
    return (
        <div class="col text-center">
    <div class="card h-100 food-card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fs-4 fw-bold">{name}</h5>
        <p class="card-text">{description}</p>
        <p className='price '>{price}</p>
      </div>
      <div className="card-body">
      <NavLink to={`/booking/${_id}`}>
            <button className="btn btn-success me-2 order-btn">ORDER NOW</button>
            </NavLink>
            <NavLink to={`/details/${_id}`}>
            <button className="btn btn-success  order-btn">Details</button>
            </NavLink>
      </div>
      <div class="card-footer d-flex justify-content-evenly">
        <small class="text-muted">serving time</small>
        <small class="text-muted">home</small>
      </div>
    </div>
  </div>
    );
};

export default Food;