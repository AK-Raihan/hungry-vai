import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../images/logo.png';
import useFirebase from '../../../hooks/useFirebase';

const Navigation = () => {
  const{user, logout}=useFirebase()
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
          <NavLink to="/shop" className="nav-link fs-6 text-white">Shop</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link fs-6 text-white">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link fs-6 text-white">Contact</NavLink>
        </li>
      </ul>
      <div>

        <div>
        </div> 

        {
        user?.email ?
            <div className=" d-flex justify-content-center align-items-center w-100">

              <span>Hello <span className="fw-bold text-info">{user.displayName}</span> </span>
              <div className=""><img className="rounded-circle user-pic" src={user.photoURL} alt="" /></div>    
              <button onClick={logout} className="text-success  border-0 btn-lg btn-outline-danger" >Logout</button>

            </div>
            :
            <NavLink to="/login">
                <button className="btn btn-lg btn-outline-info">Login</button>
            </NavLink>
        }
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navigation;