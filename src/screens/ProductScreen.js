import React, {  useEffect } from 'react';
import {Link} from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from "../components/Rating";
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetail } from '../actions/ProductAction'
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()
    // const productDetails = useSelector((state) => state.productDetails)
    // const {loading, error, product} = productDetails
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    console.log(match.params.id)

    // const [product, setProduct] = useState({})


    // const getdata = async () => {
    //     await axios.get(`/api/products/${match.params.id}`)
    //         .then(res => {
    //             setProduct(res.data)
    //         })
    //         .catch(err => console.log(err))
    // }


    useEffect(() => {
        // getdata()
        dispatch(listProductDetail(match.params.id))
    }, [dispatch, match])


    return (
        <>
           <Link to={"/"}>
               Go Back
           </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={"danger"}>
                    {error}
                </Message>
            ) : (
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
                                Description : {product.description}
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
            )}

        </>
    );
};

export default ProductScreen;
