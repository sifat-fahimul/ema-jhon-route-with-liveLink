import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    return (
        <div className='product'>
            <div>

            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
                <button onClick={() => props.handleRemove(key)} className='card-btn'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;