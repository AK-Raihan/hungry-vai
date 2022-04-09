import React, { useEffect, useState } from 'react';
import Food from './Food/Food';



const Foods = () => {
    const[Foods, setFoods]= useState([]);

    useEffect( ()=>{
        fetch('https://mighty-cove-82642.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    } ,[])
    return (
        <div className="container my-5">
            <div className="title work-title text-center">
            <h2 className=" "> Most Popular Foods </h2>
            <p className='mb-5'> Completely network impactful users whereas next-generation applications engage <br /> out thinking via tactical action.</p>
            </div>
            
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
                {
                    Foods.map(food=><Food
                        key={food._id}
                        food={food} ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;