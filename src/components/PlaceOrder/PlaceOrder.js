import React from 'react';
import { Link } from 'react-router-dom';
import giphy from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div>
            <h1>place order</h1>
            <img src={giphy} alt="" />
            <br />
            <Link to='/'>
                <button className='card-btn'>Continue Shopping</button>
            </Link>
        </div>
    );
};

export default PlaceOrder;