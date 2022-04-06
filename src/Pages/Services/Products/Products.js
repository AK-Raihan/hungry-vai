import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css'


const Products = () => {
    const[products, setProducts]= useState([]);

    useEffect( ()=>{
        fetch('./product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    } ,[])
    return (
        <div className='product-main py-5'>
            <div className="container my-5">
            <div className="product-title text-center py-3">
            <h5 className=""> Our Services </h5>
            <h1> What We’re Offering</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    products.map(product=><Product
                        key={product._id}
                        product={product} ></Product>)
                }
            </div>
        </div>
        </div>
    );
};

export default Products;