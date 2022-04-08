import React, { Component } from "react";
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider3.jpg'
import slider3 from '../../../images/slider4.jpg'



export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      
    };
    return (
        <div>
        <Slider {...settings}>
          <div>
            <div style={{ 
                backgroundImage: `url("${slider1}")`,
                maxWidth: '100%',
                height: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: "310px",
                paddingBottom: "350px"
                
                }}>
                
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <h2 className="text-center banner-title">Unique Food Network...</h2>
                    <div class="input-group  mb-3 p-2">
                        <input type="text" class="form-control p-3" placeholder="search your favourite food" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary p-3 " type="button" id="button-addon2">Search</button>
                    </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
          </div>

          <div>
          <div style={{ 
                backgroundImage: `url("${slider2}")`,
                maxWidth: '100%',
                height: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: "310px",
                paddingBottom: "350px"
                
                }}>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <h2 className="text-center banner-title">Unique Food Network...</h2>
                    <div class="input-group  mb-3 p-2">
                        <input type="text" class="form-control p-3" placeholder="search your favourite food" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary p-3 " type="button" id="button-addon2">Search</button>
                    </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
          </div>

          <div>
          <div style={{ 
                backgroundImage: `url("${slider3}")`,
                maxWidth: '100%',
                height: 'auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                paddingTop: "310px",
                paddingBottom: "350px"
                
                }}>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                    <h2 className="text-center banner-title">Unique Food Network...</h2>
                    <div class="input-group  mb-3 p-2">
                        <input type="text" class="form-control p-3" placeholder="search your favourite food" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-secondary p-3 " type="button" id="button-addon2">Search</button>
                    </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}