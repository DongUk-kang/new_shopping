import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        const userInput = {
            email,
            password
        }
        console.log(userInput)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId={'email'}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Enter Email'}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={'password'}>
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button type={'submit'} variant={'primary'}>
                    Sign In
                </Button>
            </Form>

            <Row className={'py-3'}>
                <Col>
                    New Customer? {' '}
                    <Link to={"/register"}>
                        Register
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default LoginScreen;
