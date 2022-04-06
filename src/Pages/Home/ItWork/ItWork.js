import React from 'react';
import work1 from '../../../images/1.jpg'
import work2 from '../../../images/2.jpg'
import work3 from '../../../images/3.jpg'
import work4 from '../../../images/4.jpg'
import './ItWork.css'


const ItWork = () => {
  return (
    <div className='work-main py-5'>
      <div className="container">
        <div className="work-full-inner">
        <div className="work-title text-center">
          <h2>How it Works</h2>
          <p className='mb-5'>Completely network impactful users whereas next-generation applications engage <br /> out thinking via tactical action.</p>
        </div>

        <div className="row">

          <div className="col-lg-3">
            <div className="work-item text-center">
              <div className="work-step">
                    <h5>1st step</h5>
              </div>
              <div className="work-img ">
                <a href=""><img src={work1} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>Choose Your Favorite</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="work-item text-center">
            <div className="work-step">
                    <h5>2nd step</h5>
              </div>
              <div className="work-img ">
                <a href=""><img src={work2} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>HomeChef Will Cook</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="work-item text-center">
            <div className="work-step">
                    <h5>3rd step</h5>
              </div>
              <div className="work-img ">
                <a href=""><img src={work3} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>We Deliver Your Meals</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="work-item text-center">
            <div className="work-step">
                    <h5>final step</h5>
              </div>
              <div className="work-img ">
                <a href=""><img src={work4} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>Eat And Enjoy</h6>
              </div>
            </div>
          </div>

          

        </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default ItWork;