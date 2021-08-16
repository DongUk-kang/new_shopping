import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import { CheckoutSteps, FormContainer } from "../components"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { saveShppingAddress } from "../actions/CartAction"

const ShippingScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)



    const submitShipping = async (e) => {
        e.preventDefault()

        const userInput = {
            address,
            city,
            postalCode,
            country
        }

        dispatch(saveShppingAddress(userInput))
        history.push("/payment")

    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>shipping</h1>
            <Form onSubmit={submitShipping}>
                <Form.Group controlId={'address'}>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter Address'}
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={'city'}>
                    <Form.Label>
                        City
                    </Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter City'}
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={'postalcode'}>
                    <Form.Label>
                        Postal Code
                    </Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter PostalCode'}
                        value={postalCode}
                        onChange={event => setPostalCode(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={'country'}>
                    <Form.Label>
                        Country
                    </Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter Country'}
                        value={country}
                        onChange={event => setCountry(event.target.value)}
                    />
                </Form.Group>
                <Button
                    type={"submit"}
                    variant={'primary'}
                >
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default ShippingScreen;
