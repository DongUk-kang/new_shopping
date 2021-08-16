import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Button, Row, Col, ListGroup, Card, Image} from 'react-bootstrap'
import {CheckoutSteps, Message} from "../components"
import { useSelector, useDispatch } from "react-redux"
import { createOrder } from "../actions/OrderAction"

const PlaceOrder = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector((state) => state.cart)
    if (!cart.shippingAddress.address) {
        history.push("/shipping")
    } else if (!cart.paymentMethod) {
        history.push("/payment")
    }

    const orderCreate = useSelector(state => state.orderCreate)
    const { loading, success, order } = orderCreate



    const addDeciMals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    cart.itemsPrice = addDeciMals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    cart.shippingPrice = addDeciMals(
        cart.itemsPrice > 100 ? 0 : 100
    )

    cart.taxPrice = addDeciMals(
        Number((0.15 * cart.itemsPrice).toFixed(2))
    )
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.taxPrice) +
        Number(cart.shippingPrice)
    ).toFixed(2)


    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }
    },[history, success])

    const placeoderHandler = async (e) => {
        e.preventDefault()
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice
            })
        )
    }


    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>
                                    Address :
                                </strong>
                                {" "} {cart.shippingAddress.address}, {cart.shippingAddress.city} {" "}
                                {cart.shippingAddress.postalCode}, {" "}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>
                                    Method :
                                </strong>
                                {" "} {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0
                                ? (
                                    <Message>Your Cart is empty</Message>
                                )
                                : (
                                    <ListGroup variant={'flush'}>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} * ${item.price} = $ {item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )
                            }

                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Items
                                    </Col>
                                    <Col>
                                        $ {cart.itemsPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Shipping Price
                                    </Col>
                                    <Col>
                                        $ {cart.shippingPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Tax
                                    </Col>
                                    <Col>
                                        $ {cart.taxPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Total Price
                                    </Col>
                                    <Col>
                                        $ {cart.totalPrice}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type={'button'}
                                    className={'btn-block'}
                                    disabled={cart.cartItems === 0}
                                    onClick={placeoderHandler}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default PlaceOrder;
