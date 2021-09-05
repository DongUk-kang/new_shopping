import React,{ useEffect } from 'react';
import { listProducts, deleteProduct } from "../actions/ProductAction"
import { useDispatch, useSelector } from "react-redux";
import { Loader, Message} from "../components/index"
import {Table, Button, Row, Col, Tab} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const ProductsListScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const deleteproducts = useSelector((state) => state.deleteproducts)
    const { success } = deleteproducts
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch, userInfo, listProducts, success])

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <>
            <Row>
                <h1>Product List</h1>
                <Table striped bordered hover responsive className={'table-sm'}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td> $ {product.price}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>
                                    <Button variant={"danger"} className={"btn-sm"} onClick={() => deleteHandler(product._id)}>
                                        <i className={'fas fa-trash'}/>
                                    </Button>
                                </td>
                                <td>
                                    <LinkContainer to={`/admin/products/${product._id}/edit`}>
                                        <Button
                                            type={"submit"}
                                            variant={"primary"}
                                        >
                                            Go Update
                                        </Button>
                                    </LinkContainer>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <LinkContainer to={'/admin/product/register'}>
                    <Button
                        variant={"dark"}
                        className={'btn-sm'}
                    >
                        Register Product
                    </Button>
                </LinkContainer>
            </Row>
        </>
    );
};

export default ProductsListScreen;

