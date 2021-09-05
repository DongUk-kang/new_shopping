import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { listUsers, removeUser } from "../actions/UserListAction"
import {Button, Row, Table} from "react-bootstrap";
import { Loader,Message } from "../components/index"
import { useHistory } from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"


const UserListScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const userList = useSelector((state) => state.userList)
    const {loading, users, error} = userList

    const deleteUser = useSelector((state) => state.deleteUser)
    const { success: successDelete } = deleteUser
    // const { loading: loadingReducer, error: errorReducer, success: successReducer } = userDelete


    useEffect(() => {
        dispatch(listUsers())
        // dispatch(removeUser())
    },[dispatch, history, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure?")) {
            dispatch(removeUser(id))
        }
    }

    return (
        <Row>
            <h1>User List</h1>
            {loading && <Loader />}
            {error
                ? (<Message variant={"danger"}>{error}</Message>)
                : (
                    <Table striped bordered hover responsive className={'table-sm'}>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Created Date</th>
                                <th>Update Date</th>
                                <th>Admin</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map(user => (
                                <tr key={user.name}>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.password.substring(0, 10)}
                                    </td>
                                    <td>
                                        {user.createdAt.substring(0, 10)}
                                    </td>
                                    <td>
                                        {user.updatedAt.substring(0, 10)}
                                    </td>
                                    <td>
                                        {user.isAdmin
                                            ? (<i className={'fas fa-check-circle'} style={{color: "green"}}/>)
                                            : (<i className={'fas fa-ban'} style={{color: "red"}}/>)
                                        }
                                    </td>
                                    <td>
                                        <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                            <Button variant={"light"} className={'btn-sm'}>
                                                <i className={'fas fa-edit'} />
                                            </Button>
                                        </LinkContainer>
                                    </td>
                                    <td>
                                        <Button variant={"danger"} className={"btn-sm"} onClick={() => deleteHandler(user._id)}>
                                            <i className={'fas fa-trash'} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )
            }
        </Row>
    );
};

export default UserListScreen;
