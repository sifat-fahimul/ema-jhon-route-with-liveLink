import React from 'react';
import './Card.css';

const Card = (props) => {
    const { card } = props;
    let total = 0;
    for (const product of card) {
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) * 10 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>Items Ordered :{props.card.length}</h4>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping.toFixed(2)}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p><b>GrandTotal : {grandTotal.toFixed(2)}</b></p>
        </div>
    );
};

export default Card;