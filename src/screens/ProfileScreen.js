import React, {useState, useEffect} from 'react';
import { Form, Button, Row, Col, Table } from "react-bootstrap"
import { Loader, Message } from "../components"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUserDetails, updateUserDetails } from "../actions/UserActions"
import { listMyOrder } from "../actions/OrderAction"
import { LinkContainer } from "react-router-bootstrap"

const ProfileScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")
    // const [show, setShow] = useState(false)


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
    const userUpdate = useSelector(state => state.userUpdate)
    const { success } = userUpdate

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy


    const summitHandle = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Password Do Not Match")
        }
        dispatch(updateUserDetails({id: user._id, name, email, password}))
    }

    console.log(orders)

    useEffect(() => {
        if (!userInfo) {
            history.push("/login")
        }
        else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrder())
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
                { success && <Message variant={"success"} >Profile Updated</Message> }
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
                {loadingOrders && <Loader />}
                {errorOrders ? (
                    <Message variant={"danger"}>{errorOrders}</Message>
                ) : (
                    <Table striped bordered hover responsive className={"table-sm"}>
                        <thead>
                            <tr>
                               <th>ID</th>
                               <th>Date</th>
                               <th>Total</th>
                               <th>Paid</th>
                               <th>Delivered</th>
                               <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.createdAt.substring(0, 10)}</td>
                                    <td> $ {item.totalPrice}</td>
                                    <td>
                                        {
                                            item.isPaid
                                                ? (item.paidAt.substring(0, 10))
                                                : (<i className={'fas fa-times'} style={{color: "red"}}/>)
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.isDelivered
                                                ? (item.deliveredAt.substring(0, 10))
                                                : (<i className={'fas fa-times'} style={{color: "red"}}/>)
                                        }
                                    </td>
                                    <td>
                                        <LinkContainer to={`/orders/${item._id}`}>
                                            <Button className={'btn-sm'} variant={'light'}>
                                                Details
                                            </Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

            </Col>
        </Row>
    );
};

export default ProfileScreen;
