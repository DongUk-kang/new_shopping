import React from 'react';
import {Card} from 'react-bootstrap'

const ProductCard = ({product}) => {
    return (
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

    );
};

export default ProductCard;
