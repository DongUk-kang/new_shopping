import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {FormContainer, Loader, Message} from "../components"
import { useParams, useHistory } from 'react-router-dom'
import { updateProduct, listProductDetail } from '../actions/ProductAction'
import { Link } from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import axios from "axios";

const ProductUpdateScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [countInStock, setCountInStock] = useState("")
    const [image, setImage] = useState("")
    const [uploading, setUploading] = useState(false)


    const productDetails = useSelector((state) => state.productDetails)
    const { product, error, loading } = productDetails

    const updateProducts = useSelector((state) => state.updateProducts)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = updateProducts

    useEffect(() => {
        if (successUpdate) {
            history.push("/admin/productslist")
        }
        else {
            if (!product.name || product._id !== id) {
                dispatch(listProductDetail(id))
            }
            else {
                setName(product.name)
                setPrice(product.price)
                setDescription(product.description)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setImage(product.image)
            }
        }
    }, [dispatch, product, history, id, successUpdate])

    console.log(product)


    const updateHandler = (e) => {
        e.preventDefault()
        if (window.confirm("Are You Sure?")) {
            dispatch(updateProduct({_id: id, name, price, description, brand, category, countInStock, image}))
        }
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("image", file)
        setUploading(true)
        try {
            const config = {
                headers: {
                    'Content-Type': "multipart/form-date"
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
            <Link to={"/admin/productslist"} className={'btn btn-light my-3'}>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loading
                    ? (loadingUpdate && <Loader/>)
                    : (error
                        ? (errorUpdate && <Message variant={"danger"}>{error}</Message> )
                        : (
                            <Form onSubmit={updateHandler}>
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
                                        placeholder={"enter image url"}
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                    />
                                    <Form.File
                                        id={"image-file"}
                                        label={"choose file"}
                                        custom
                                        onChange={uploadFileHandler}

                                    />
                                    {uploading && <Loader/>}
                                </Form.Group>

                                <Button
                                    type={"submit"}
                                    variant={"primary"}
                                >
                                    Update
                                </Button>
                            </Form>

                        )
                    )
                }
            </FormContainer>
        </>
    );
};

export default ProductUpdateScreen;
