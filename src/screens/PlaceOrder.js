import React from 'react';
import {Link} from 'react-router-dom'
import CheckoutSteps from "../components/CheckoutSteps";
import {Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'

const PlaceOrder = () => {


    const placeoderHandler = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <CheckoutSteps />
            <Row>
                <Col md={8}>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>
                                    Address :
                                </strong>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>
                                    Method :
                                </strong>
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>

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
                                        $ 123123
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Shipping Price
                                    </Col>
                                    <Col>
                                        $ 123
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Tex
                                    </Col>
                                    <Col>
                                        $ 12
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Total Price
                                    </Col>
                                    <Col>
                                        $ 123456
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type={'button'}
                                    className={'btn-block'}
                                    disabled
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
