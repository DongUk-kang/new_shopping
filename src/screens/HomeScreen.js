import React, {useState} from 'react';
import datas from "../Product";
import {Row, Col, Card} from 'react-bootstrap'

const HomeScreen = () => {

    const [products, setProducts] = useState(datas)

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product =>
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Card className={'my-3 p-3 rounded'}>
                            <Card.Img src={product.image} variant={"top"} />
                            <Card.Body>
                                <Card.Title as={"div"}>
                                    <strong>
                                        {product.name}
                                    </strong>
                                </Card.Title>
                                <Card.Text as={"div"}>
                                    <strong>
                                        {product.rating}
                                    </strong>
                                    {/*<Rating*/}
                                    {/*    text={`${product.numReviews} reviews`}*/}
                                    {/*    value={product.rating}*/}
                                    {/*/>*/}
                                </Card.Text>
                                <Card.Text as={"h3"}>
                                   $ {product.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>


        </>
    );
};

export default HomeScreen;
