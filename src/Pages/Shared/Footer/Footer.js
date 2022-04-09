import { faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faClock, faEnvelope, faMapMarkerAlt, faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#000000' }}>
            <ScrollToTop smooth top="1000" />
            <Container className="pt-5 pb-2 text-start">
                <Row>
                    <Col lg={3} md={6} className="text-white">
                        <h3 className="text-center text-md-start"><img style={{height: '55px'}} className='img-fluid' src={logo} alt="" /></h3>
                        <p className="text-light text-center text-md-start">Experience what the biggest and the best of wet and wild iconic Hosting Provider</p>
                        <p><FontAwesomeIcon className="text-warning" icon={faMapMarkerAlt} /> Mirpur, Dhaka-1216</p>
                        <p><FontAwesomeIcon className="text-warning" icon={faEnvelope} /> support@domain.com</p>
                        <p><FontAwesomeIcon className="text-warning" icon={faEnvelope} /> (+880)1962 123345</p>
                    </Col>
                    <Col lg={2} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Quick Links</h4>
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> About Us</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Services</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Booking</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Packages</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Contact</button>
                    </Col>
                    <Col lg={3} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Useful Links</h4>
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Privacy Policy</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Terms and Conditions</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Disclaimer</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> Support</button><br />
                        <button className="btn text-white "><FontAwesomeIcon className="text-warning" icon={faChevronRight} /> FAQ</button>
                    </Col>
                    <Col lg={4} md={6} className="text-white">
                        <h4 className="text-center text-md-start mb-3">Join our newsletter</h4>
                        <div className="news-form">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                        </div>
                        <hr />
                        <div className="social-link">
                            <div className="social-menu d-flex list-unstyled justify-content-center ">                  
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter-square"></i></li>
                            <li><i className="fab fa-instagram-square"></i></li>
                            <li><i className="fab fa-linkedin"></i></li>
                        </div>
                        </div>
                        <hr />
                        <Row>
                            <Col className="p-0">
                            <p><FontAwesomeIcon className="text-warning" icon={faCcMastercard} /> MasterCard</p>
                            </Col>
                            <Col>
                            <p><FontAwesomeIcon className="text-warning" icon={faCcPaypal} /> PayPal</p>
                            </Col>
                            <Col>
                            <p><FontAwesomeIcon className="text-warning" icon={faCcVisa} /> Visa</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className="text-white" />
                <p className="text-white text-center">Copyright &copy; 2022. All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;