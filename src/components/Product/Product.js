import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    const { name, price, seller, img, stock, star } = props.product;
    const cardIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <div className="product-and-rating">
                    <div className="product-derails">
                        <p>By: {seller}</p>
                        <h3>Price $ {price}</h3>
                        <p><small>only {stock} left in stick-order soon</small></p>

                        <br />
                        <button onClick={() => props.handleAddToCard(props.product)} className='card-btn'>{cardIcon} add to card</button>
                    </div>
                    <div className="rating">
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;