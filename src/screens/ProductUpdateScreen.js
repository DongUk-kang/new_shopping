import React,{ useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Loader, Message} from "../components"
import { useParams, useHistory } from 'react-router-dom'
import {updateProduct, listProductDetail } from '../actions/ProductAction'


const ProductUpdateScreen = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    // const [countInStock, setCountInStock] = useState("")

    const userDetails = useSelector((state) => state.userDetails)
    const { products, error, loading } = userDetails

    console.log(products)

    const updateProducts = useSelector((state) => state.updateProducts)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = updateProducts




    useEffect(() => {

    }, [dispatch, id, successUpdate, history])


    return (
        <div>
            <h1>Update Product</h1>

        </div>
    );
};

export default ProductUpdateScreen;
