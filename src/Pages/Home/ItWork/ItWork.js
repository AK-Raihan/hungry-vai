import React from 'react';

import bg from '../../../images/category-bg.jpg'
import work1 from '../../../images/1.jpg'
import work2 from '../../../images/2.jpg'
import work3 from '../../../images/3.jpg'
import work4 from '../../../images/4.jpg'


const ItWork = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat', 
    }}>
      <div className='cata-main'>
      <div className="container">
        <div className="cata-full-inner">
        <div className="cata-title text-center">
          <h2>Browse Food Category</h2>
          <p>Completely network impactful users whereas next-generation applications engage <br /> out thinking via tactical action.</p>
        </div>

        <div className="row">

          <div className="col-lg-2">
            <div className="work-item">
              <div className="work-item bg-success">
                <a href=""><img src={work1} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>Choose Your Favorite</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="work-item">
              <div className="work-img bg-info">
                <a href=""><img src={work2} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>HomeChef Will Cook</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="work-item">
              <div className="work-img bg-primary">
                <a href=""><img src={work3} alt="" /></a>
              </div>
              <div className='work-name'>
                <h6 className='mt-3'>We Deliver Your Meals</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="work-item">
              <div className="work-img bg-secondary">
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
    </div>
    
  );
};

export default ItWork;