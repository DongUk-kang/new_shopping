import React,{ useEffect }from 'react';
import { deliverOrder, checkPayOrder, adminOrderList } from '../actions/OrderAction'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Table} from 'react-bootstrap'
import {Loader, Message} from "../components"
import {Link, useParams} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const OrderListScreen = () => {

    // const {id} = useParams()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { useInfo } = userLogin

    const adminListOrder = useSelector(state => state.adminListOrder)
    const { loading, orders, error } = adminListOrder

    // const paycheckOrder = useSelector((state) => state.paycheckOrder)
    //  const { loading, success, error, orders } = paycheckOrder

    // const orderDeliver = useSelector((state) => state.orderDeliver)
    // const { loading: loadingDeliver, success: successDeliver, error: errorDeliver, orders: ordersDeliver } = orderDeliver

    console.log(orders)


    useEffect(() => {
        dispatch(adminOrderList())
        // dispatch(checkPayOrder(id))
        // dispatch(deliverOrder(id))
    }, [dispatch])


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
                                <th>ID</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Paid</th>
                                <th>Deliverd</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {orders && orders.map(order =>(
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user.name}</td>
                                <td>{order.createdAt.slice(0, 10)}</td>
                                <td>$ {order.totalPrice}</td>
                                <td>{order.isPaid ? (order.paidAt.slice(0, 10)) : (<i className={'fas fa-times'} style={{color: "red"}}/>)}</td>
                                <td>{order.isDelivered ? (order.deliverAt.slice(0, 10)) : (<i className={'fas fa-times'} style={{color: "red"}}/>)}</td>
                                <td>
                                    <LinkContainer to={`/order/${order._id}`}>
                                        <Button variant={"light"} className={'btn-sm'}>
                                            Details
                                        </Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                )
            }
        </div>
    );
};

export default OrderListScreen;
