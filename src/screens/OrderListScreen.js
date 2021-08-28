import React,{ useEffect }from 'react';
import { deliverOrder, checkPayOrder } from '../actions/OrderAction'
import {useDispatch, useSelector} from 'react-redux'
import {Table} from 'react-bootstrap'
import {Loader, Message} from "../components"
import {useParams} from 'react-router-dom'

const OrderListScreen = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const paycheckOrder = useSelector((state) => state.paycheckOrder)
     const { loading, success, error, orders } = paycheckOrder

    const orderDeliver = useSelector((state) => state.orderDeliver)
    const { loading: loadingDeliver, success: successDeliver, error: errorDeliver, orders: ordersDeliver } = orderDeliver

    useEffect(() => {
        dispatch(checkPayOrder(id))
        dispatch(deliverOrder(id))
    })


    return (
        <div>
            <h1>Order List</h1>
            {loading && <Loader/>}
            {error
                ? (<Message variant={"danger"}>{error}</Message>)
                : (
                    <Table striped bordered hover responsive className={'table-sm'}>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Order Pay</th>
                                <th>Order Deliver</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders && orders.map(order =>(
                            <th key={orders.name}>
                                <td>
                                    {order.name}
                                </td>
                                <td>
                                    {order.isPaid
                                        ? (
                                            <Message variant={"success"}>
                                                Paid Yet {order.paidAt}
                                            </Message>
                                        )
                                        : (
                                            <Message variant={"danger"}>
                                                Not Paid
                                            </Message>
                                        )
                                    }
                                </td>
                                <td>
                                    {order.isDelivered
                                        ? (
                                            <Message>
                                                Delivered Yet {order.delivered}
                                            </Message>
                                        )
                                        : (
                                            <Message>
                                                Not Delivered
                                            </Message>
                                        )
                                    }
                                </td>
                            </th>
                        ))}
                    </tbody>
                    </Table>
                )
            }
        </div>
    );
};

export default OrderListScreen;
