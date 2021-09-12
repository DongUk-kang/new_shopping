import React from 'react';
import { adminOrdersDetail } from '../actions/OrderAction'
import {useDispatch, useSelector} from 'react-redux'

const OrderListDetails = () => {

    const dispatch = useDispatch()

    const adminDetailOrder = useSelector(state => state.adminDetailOrder)
    const { loading, error, order} = adminDetailOrder




    return (
        <div>
            <h1>Order Details</h1>
        </div>
    );
};

export default OrderListDetails;
