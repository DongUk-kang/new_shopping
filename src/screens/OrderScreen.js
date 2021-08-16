import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails } from "../actions/OrderAction"
import { useParams } from "react-router-dom";

const OrderScreen = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    // const [orderDetail, setOrderDetail] = useState()

    const orderDetails = useSelector(state => state.orderDetails)
    const { loading, order, error } = orderDetails


    console.log(order)
    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [])

    return (
        <div>
            <h1>Order</h1>
        </div>
    );
};

export default OrderScreen;
