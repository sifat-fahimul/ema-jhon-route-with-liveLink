import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        handleRemove={handleRemove}
                        key={product.key}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='card'>
                <Card card={cart}>
                    <Link to='/review'>
                        <button className='card-btn'>Place Order</button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default OrderReview;