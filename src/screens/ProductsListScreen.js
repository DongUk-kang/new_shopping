import React,{ useEffect } from 'react';
import { createProduct, listProducts } from "../actions/ProductAction"
import { useDispatch, useSelector } from "react-redux";
import { Loader, Message} from "../components/index"
import {Table, Button, Row, Col, Tab} from 'react-bootstrap'

const ProductsListScreen = () => {

    const dispatch = useDispatch()

    const productlist = useSelector((state) => state.prductlist)
    const { loading, error, products } = productlist

    const productCreate = useSelector((state) => state.productCreate)
    const {loading: loadingCreate, error: errorCreate, success: successCreate, product: createProduct} = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch(createProduct())
    }, [dispatch, userInfo,createProduct])


    return (
        <>
            <Row>
                <h1>Create Order</h1>
                <Table striped bordered hover responsive className={'table-sm'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td> $ {product.price}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </>
    );
};

export default ProductsListScreen;

