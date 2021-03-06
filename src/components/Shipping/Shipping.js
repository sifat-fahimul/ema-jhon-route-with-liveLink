import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const history = useHistory()
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch(`https://sheltered-badlands-78673.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order place Successfully');
                    clearTheCart();
                    reset()
                    history.push('/')
                }
            })
    };
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' defaultValue={user.displayName} {...register("name")} />
                <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='Address' defaultValue="" {...register("address")} />
                <input placeholder='City' defaultValue="" {...register("city")} />
                <input placeholder='Phone' defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;