import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { listUsers } from "../actions/UserListAction"

const UserListScreen = () => {

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const {loading, users, error} = userList


    useEffect(() => {
        dispatch(listUsers())
    },[])

    console.log(users)

    return (
        <div>
            <h1>List Screen</h1>
            {/*{users.length}*/}
            {users && users.map(user => (
                <h1>{user.name}</h1>
            ))}
        </div>
    );
};

export default UserListScreen;
