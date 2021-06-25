import React, {useState, useEffect} from 'react';
// import dates from "../Product";
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import axios from "axios";

const HomeScreen = () => {

    const [products, setProducts] = useState([])

        // console.log(products)



    const getData = async () => {
        axios.get("/api/products")
            .then(res => {
                setProducts(res.data.products)
                console.log(res.data.products)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        getData()
    }, [])


    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(item => (
                    <ProductCard product={item} />
                ))}
                {/*{products.map(product =>*/}
                {/*    <Col*/}
                {/*        key={product.name}*/}
                {/*        sm={12}*/}
                {/*        md={6}*/}
                {/*        lg={4}*/}
                {/*        xl={3}*/}
                {/*    >*/}
                {/*        <ProductCard product={product}/>*/}
                {/*    </Col>*/}
                {/*)}*/}
            </Row>
        </>
    );
};

export default HomeScreen;
