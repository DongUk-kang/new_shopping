import React from 'react';
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from "../Product";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {

    const product = products.find(p => p._id === match.params.id)
    console.log(product)

    console.log(match.params.id)

    return (
        <>
           <Link to={"/"}>
               Go Back
           </Link>
            <Row>
                <Col md={6}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fluid
                    />
                </Col>
                <Col md={3}>
                    <ListGroup variant={'flush'}>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                text={`${product.numReviews} reviews`}
                                value={product.rating}
                                color={"orange"}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Description : {product.description.slice(0, 100) } ...
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className={'btn-block'}
                                    type={"button"}
                                    disabled={product.countInStock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
