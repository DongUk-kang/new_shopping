import React, { useState} from 'react';
import FormContainer from "../components/FormContainer";
import {Form, Button, Col} from 'react-bootstrap'
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {


    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const payhandle = async (e) => {
        e.preventDefault()


    }


    return (
        <FormContainer>
            <CheckoutSteps />
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
