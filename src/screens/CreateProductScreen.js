import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from "../actions/ProductAction"
import {useHistory} from "react-router-dom";
import {FormContainer, Loader, Message} from "../components";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

const CreateProductScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const [description, setDescription] = useState("")
    // const [numReviews, setNumReviews] = useState("")
    const [uploading, setUploading] = useState(false)

    const productCreate = useSelector((state) => state.productCreate)
    const { loading, success, error } = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const createHandler = async (e) => {
        e.preventDefault()
        const newProduct = {
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description,
            user: userInfo._id
        }
        console.log(newProduct)
        dispatch(createProduct(newProduct))
    }

    useEffect(() => {
        if (success) {
            history.push("/")
        }
    },[dispatch, success, error])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("image", file)
        setUploading(true)
        try {
            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
        const {data} = await axios.post("/api/upload", formData, config)
        setImage(data)
        setUploading(false)
        }
        catch (error) {
            setUploading(false)
        }
    }

    return (
        <>
            <FormContainer>
                <h1>Create Product</h1>
                {loading && <Loader/>}
                {error && <Message variant={"danger"}>{error}</Message>}
                <Form onSubmit={createHandler}>
                        <Form.Group controlId={"name"}>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                            type={"name"}
                            placeholder={"Enter Name"}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"price"}>
                        <Form.Label>
                            Price
                        </Form.Label>
                        <Form.Control
                            type={"price"}
                            placeholder={"price"}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    {/*<Form.Group controlId={'numReviews'}>*/}
                    {/*    <Form.Label>*/}
                    {/*        NumReviews*/}
                    {/*    </Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        type={"numReviews"}*/}
                    {/*        placeholder={"numReviews"}*/}
                    {/*        value={numReviews}*/}
                    {/*        onChange={e => setNumReviews(e.target.value)}*/}
                    {/*    />*/}
                    {/*</Form.Group>*/}
                    <Form.Group controlId={"description"}>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control
                            type={"description"}
                            placeholder={"description"}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"brand"}>
                        <Form.Label>
                            Brand
                        </Form.Label>
                        <Form.Control
                            type={"brand"}
                            placeholder={"brand"}
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"category"}>
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Control
                            type={"category"}
                            placeholder={"category"}
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"countInStock"}>
                        <Form.Label>
                            CountInStock
                        </Form.Label>
                        <Form.Control
                            type={"countInStock"}
                            placeholder={"countInStock"}
                            value={countInStock}
                            onChange={e => setCountInStock(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"image"}>
                        <Form.Label>
                            Image
                        </Form.Label>
                        <Form.Control
                            type={"text"}
                            placeholder={"Enter Image Url"}
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                        <Form.File
                            id={"image-file"}
                            label={"choose File"}
                            custom
                            onChange={uploadFileHandler}
                        />
                        {uploading && <Loader/>}
                    </Form.Group>
                    <Button
                        type={"submit"}
                        variant={"primary"}
                    >
                        Register Product
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
};

export default CreateProductScreen;
