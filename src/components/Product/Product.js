import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const { name, price, seller, img, stock } = props.product;
    const cardIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <p>By: {seller}</p>
                <h3>Price $ {price}</h3>
                <p><small>only {stock} left in stick-order soon</small></p>
                <button onClick={() => props.handleAddToCard(props.product)} className='card-btn'>{cardIcon} add to card</button>
            </div>
        </div>
    );
};

export default Product;