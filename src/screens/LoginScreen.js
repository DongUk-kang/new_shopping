import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginScreen = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <Form>
                <Form.Group controlId={'email'}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Enter Email'}
                    />
                </Form.Group>
                <Form.Group controlId={'password'}>
                    <Form.Label>PassWord</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Enter Password'}
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
