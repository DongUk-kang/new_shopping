import React, {useState, useEffect} from 'react';
import { Form, Button, Row, Col } from "react-bootstrap"
import { Loader, Message } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserDetails, updateUserDetails } from "../actions/UserActions"

const ProfileScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
    const userUpdate = useSelector(state => state.userUpdate)
    const { success } = userUpdate



    const summitHandle = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Password Do Not Match")
        }
        dispatch(updateUserDetails({id: user._id, name, email, password}))
    }



    useEffect(() => {
        if (!userInfo) {
            history.push("/login")
        }
        else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                { loading && <Loader /> }
                { error && <Message variant={"danger"}>{error}</Message> }
                { success && <Message variant={"success"}>Profile Updated</Message> }
                { message && <Message variant={"danger"}>{message}</Message> }
                {/*{ message && <Message /> }*/}
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
