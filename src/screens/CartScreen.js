import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom'
import { addToCart } from '../actions/CartAction'
import { useSelector, useDispatch } from 'react-redux'
import {Col, Image, ListGroup, Row} from "react-bootstrap";
import { Message } from "../components";

const CartScreen = () => {

    const { id } = useParams()
    const location = useLocation()
    const qty = location.search ? Number(location.search.split('=')[1]) : 1


    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your Cart is empty <Link to={"/"}>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant={'flush'}>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        </Row>
    );
};

export default CartScreen;
