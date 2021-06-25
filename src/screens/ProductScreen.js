import React from 'react';
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from "../Product";

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
            </Row>
        </>
    );
};

export default ProductScreen;
