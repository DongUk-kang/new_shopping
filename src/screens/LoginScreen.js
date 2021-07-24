import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { FormContainer, Loader, Message } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/UserActions'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const history = useHistory()

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, userInfo, error} = userLogin

    const submitHandler = async (e) => {
        e.preventDefault()

        dispatch(login(email, password))

    }

    useEffect(() => {
        if (userInfo) {
            history.push("/profile")
        }
    }, [history, userInfo])

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {loading && <Loader />}
            {error && <Message variant={"danger"}>{error}</Message>}
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
        </FormContainer>
    );
};

export default LoginScreen;
