import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import { CheckoutSteps, FormContainer } from "../components"

const ShippingScreen = () => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalcode, setPostalcode] = useState('')
    const [country, setCountry] = useState('')


    // city, postalcode, contry

    const submitShipping = async (e) => {
        e.preventDefault()

        const userInput = {
            address,
            city,
            postalcode,
            country
        }
        console.log(userInput)


    }

    return (
        <FormContainer>
            <CheckoutSteps />
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
                        value={postalcode}
                        onChange={event => setPostalcode(event.target.value)}
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
