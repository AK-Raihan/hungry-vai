import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../../../images/about-bg.jpg'
import img from '../../../images/about-img.png';

const About = () => {
    return (
        <div>
            <div style={{ 
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            paddingTop: '120px',
            paddingBottom: '120px'
            
          }}>
            <div className='text-white text-center d-flex justify-content-center align-items-center'>
            <NavLink to="/home" className="nav-link fs-3 text-white">Home -</NavLink>
            <NavLink to="/about" className="nav-link fs-3 text-white">About Us</NavLink>

            </div>
        </div>
        <div className="container py-5">
        <div className="row">
            <div className="col-lg-6">
                <div className="about-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-content">
                    <h3 className='text-danger fw-bold'>Welcome to Hungry Vai</h3>
                    <h1 className='fs-1 fw-bold'>About Restaurant History!</h1>
                    <p className='fs-5 lh-lg'>Synergistca conceptualize leveraged inte ectual capital through virtual and the a and Proactiviely initiate lrisk highyield a platforms after realtme froms growth that awesome tently matrix robusti method powerm foistcky Sytical concepta leved ntelectua anding capita hrough virtua nteectua that capta the and Proactiviely initiate low risk highyield platforms after realtme froms that there andin Proctive initate low risk high yeld platform aftering Conven iterate optimal paradigms reliable techno</p>
                    <button className='btn btn-lg btn-outline-danger fw-bold'>GET DIRACTION</button>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default About;