import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../images/logo.png';





const Navigation = () => {

    return (
  <nav className="navbar navbar-expand-lg main-nav ">
  <div className="container">
  <div className="logo">
  <a className="navbar-brand" href="/"> <img className='img-fluid' src= {logo} alt="" /> </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink  to="/home" className="nav-link fs-6 text-white">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link fs-6 text-white">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link fs-6 text-white">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admission" className="nav-link fs-6 text-white">Admission</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fs-6 text-white">Contact</NavLink>
        </li>
      </ul>
      <div>

        <div>
        </div> <div className="d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <NavLink to='/login'>
        <button className='btn text-white fs-5 sign_in'>Sign in</button>
        </NavLink>
        <NavLink to='/register'>
        <button className='btn fs-5 text-white sign_up'>Sign up</button>
        </NavLink>
      </div>
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;