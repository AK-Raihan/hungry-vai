import React from 'react';
import Foods from '../../Services/Foods/Foods';
import Products from '../../Services/Products/Products';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import ItWork from '../ItWork/ItWork';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FoodCategory/>
            <ItWork/>
            <Foods/>
        </div>
    );
};

export default Home;