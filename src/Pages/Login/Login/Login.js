import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';



const Login = () => {
    const {user, signInUsingGoogle } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGooglelogin = ()=>{
        signInUsingGoogle(location, navigate)
    }


    
    return (
        <div>
            <div className="row py-5">
                <h1 className="text-white"> Please login</h1>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 card p-5">
                    <h3>Login to proceed and enjoy your time.</h3>
            <hr />
            <p className='text-center'> click down</p>
            <hr />
                <button onClick={handleGooglelogin}  type="submit" className="btn btn-secondary"><span><i className="fab fa-google text-info fs-5"></i></span> Login with Google</button>
                </div>

                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Login;