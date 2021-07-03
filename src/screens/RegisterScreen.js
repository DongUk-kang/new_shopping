import React from 'react';
import {Link} from "react-router-dom";
import { Button, Form, Row, Col} from 'react-bootstrap'

const RegisterScreen = () => {
    return (
        <div>
            <h1>Register</h1>
            <Form>
                <Form.Group controlId={'name'}>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter UserName'}
                    />
                </Form.Group>
                <Form.Group controlId={'email'}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Enter Email'}
                    />
                </Form.Group>
                <Form.Group controlId={'password'}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Enter Password'}
                    />
                </Form.Group>
                <Form.Group controlId={'password'}>
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Conform Password'}
                    />
                </Form.Group>
                <Button type={'submit'} variant={'primary'}>
                    Register
                </Button>
            </Form>

            <Row className={'py-3'}>
                <Col>
                    Already Join? {''}
                    <Link to={"/login"}>
                        Login
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterScreen;
