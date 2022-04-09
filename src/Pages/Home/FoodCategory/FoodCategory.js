import React from 'react';
import './FoodCategory.css'
import bg from '../../../images/catagory.jpg'
import cata1 from '../../../images/cata (1).png'
import cata2 from '../../../images/cata (2).png'
import cata3 from '../../../images/cata (3).png'
import cata4 from '../../../images/cata (4).png'
import cata5 from '../../../images/cata (5).png'
import cata6 from '../../../images/cata (6).png'
import cata7 from '../../../images/cata (7).png'

const FoodCategory = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
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
            <div className="cata-item">
              <div className="inner-item bg-success">
                <a href=""><img src={cata1} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>TEA</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cata-item">
              <div className="inner-item bg-info">
                <a href=""><img src={cata2} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>BEEF ROAST</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cata-item">
              <div className="inner-item bg-primary">
                <a href=""><img src={cata3} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>BREAKFAST</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cata-item">
              <div className="inner-item bg-secondary">
                <a href=""><img src={cata4} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>LUNCH</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cata-item">
              <div className="inner-item bg-warning">
                <a href=""><img src={cata5} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>DINNER</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="cata-item">
              <div className="inner-item bg-danger">
                <a href=""><img src={cata6} alt="" /></a>
              </div>
              <div className='cata-name'>
                <h6 className='mt-3'>JUICE</h6>
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

export default FoodCategory;


