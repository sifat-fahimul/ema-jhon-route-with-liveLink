import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCard = (product) => {
        const newCard = [...card, product];
        setCard(newCard)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="card">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;