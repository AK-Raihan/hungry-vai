import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Food = (props) => {
    const{_id, name, img, description, price}=props.food;
    return (
        <div className="col text-center">
    <div className="card h-100 food-card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fs-4 fw-bold">{name}</h5>
        <p className="card-text">{description}</p>
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
      <div className="card-footer d-flex justify-content-evenly">
      <p className="text-muted"> <FontAwesomeIcon icon="fa-regular fa-clock" />About 30 min</p>
        <p className="text-muted">Home Delevary</p>
      </div>
    </div>
  </div>
    );
};

export default Food;