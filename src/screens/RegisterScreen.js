import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import { Button, Form, Row, Col} from 'react-bootstrap'
// import axios from "axios";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { useSelector, useDispatch} from 'react-redux'
import { register } from '../actions/UserActions'
import Message from "../components/Message";

const RegisterScreen = ({history}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpasswrd, setConfirmPassowrd] = useState('')
    // const [loading, setLoaidng] = useState(false)
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    const registerUser = useSelector((state) => state.userRegister)
    const { loading, userInfo, error } = registerUser


    const submitRegister = async (e) => {
        e.preventDefault()


        dispatch(register(name, email, password))

    //     if (password !== confirmpasswrd) {
    //         alert("please confirm password")
    //
    //         return
    //     }
    //
    //
    //     const newUser = {
    //         name,
    //         email,
    //         password
    //     }
    //
    //     setLoaidng(true)
    //
    //     await axios.post('/api/users', newUser)
    //         .then(res => {
    //             console.log(res.data)
    //             setLoaidng(false)
    //             history.push("/login")
    //         })
    //         .catch(err => console.log(err.message))
     }


    return (
        <FormContainer>

            <h1>Register</h1>
            {loading && <Loader />}
            {error && <Message variant={"danger"}>{error}</Message> }
            <Form onSubmit={submitRegister}>
                <Form.Group controlId={'name'}>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'Enter UserName'}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </Form.Group>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId={'password'}>
                    <Form.Label>Conform Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Confirm Password'}
                        value={confirmpasswrd}
                        onChange={event => setConfirmPassowrd(event.target.value)}
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
        </FormContainer>
    );
};

export default RegisterScreen;
