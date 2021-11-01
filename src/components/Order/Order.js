import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const history = useHistory()
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://sheltered-badlands-78673.herokuapp.com/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    history.push('/login')
                }
            })
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <ul>
                {
                    orders.map(order => <li
                        key={order._id}
                    >{order.email} {order.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Order;