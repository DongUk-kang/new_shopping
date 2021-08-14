import React, { useState} from 'react';
import {Form, Button, Col} from 'react-bootstrap'
import { CheckoutSteps, FormContainer } from "../components"
import { useDispatch, useSelector } from  'react-redux'
import { useHistory } from 'react-router-dom'
import { savePaymentMethod } from "../actions/CartAction"

const PaymentScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        history.push("/shipping")
    }

    const payhandle = async (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push("/placeorder")
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={payhandle}>
                <Form.Group>
                    <Form.Label as={'legend'}>
                        Select Method
                    </Form.Label>
                    <Col>
                        <Form.Check
                            type={'radio'}
                            label={'PayPal or Credit Card'}
                            id={"PayPal"}
                            name={"paymentMethod"}
                            value={"PayPal"}
                            checked
                            onChange={event => setPaymentMethod(event.target.value)}
                        />

                    </Col>
                </Form.Group>
                <Button
                    type={'submit'}
                    variant={'primary'}
                >
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentScreen;
