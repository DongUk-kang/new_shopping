import React, {useState} from 'react';
import { Form, Button, Row, Col } from "react-bootstrap"
import { Loader, Message } from "../components"

const ProfileScreen = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const summitHandle = (e) => {
        e.preventDefault()
    }

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                <Form onSubmit={summitHandle}>
                    <Form.Group controlId={'name'}>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control
                            type={'name'}
                            placeHolder={'Enter Name'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={'email'}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type={'email'}
                            placeHolder={'Enter Email'}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId={"password"}>
                        <Form.Label>PassWord</Form.Label>
                        <Form.Control
                            type={'password'}
                            placeHolder={'Enter Password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm PassWord</Form.Label>
                        <Form.Control
                            type={'password'}
                            placeHolder={'Enter ConfirmPassWord'}
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        type={"submit"}
                        variant={"primary"}
                    >
                        Update
                    </Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My Order</h2>
            </Col>
        </Row>
    );
};

export default ProfileScreen;
