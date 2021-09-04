import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/UserListAction"
import {Loader, Message, FormContainer} from "../components"
import {useParams, useHistory} from "react-router-dom/cjs/react-router-dom";
import {Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap"

const UserEditScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const userDetails = useSelector((state) => state.userDetails)
    const { user, error, loading } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate
    } = userUpdate


    useEffect(() => {

        if (!user.name || user._id !== id) {
            dispatch(updateUser(id))
        }
        else {
            setName(user.name)
            setEmail(user.email)
        }
    }, [dispatch, history, id, user, successUpdate])

    const updateHandler = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(updateUser(id))
        }
    }

    return (
        <>
            <Link to={"/admin/userlist"} className={"btn btn-light my-3'"}>
                Go Back
            </Link>
            <FormContainer>
                <h1>User Edit</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant={"danger"}>{errorUpdate}</Message>}
                {loading
                    ? (<Loader />)
                    : (error
                        ? (<Message variant={"danger"}>{error}</Message> )
                        : (
                            <Form>
                                <Form.Group controlId={"name"}>
                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        type={"name"}
                                        placeholder={"enter name"}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId={"email"}>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type={"email"}
                                        placeholder={"enter email"}
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check
                                        type={"checkbox"}
                                        label={"isAdmin"}
                                        checked={isAdmin}
                                        onChange={e => setIsAdmin(e.target.checked)}
                                    />
                                </Form.Group>
                                <Button
                                    type={"submit"}
                                    variant={"primary"}
                                    onClick={() => updateHandler(user._id)}
                                >
                                    Update
                                </Button>
                            </Form>
                        )
                    )
                }
            </FormContainer>
        </>


    );
};

export default UserEditScreen;
