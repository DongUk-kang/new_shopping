import {
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_REMOVE_REQUEST,
    USER_REMOVE_SUCCESS,
    USER_REMOVE_FAIL,
    USER_LIST_UPDATE_REQUEST,
    USER_LIST_UPDATE_SUCCESS,
    USER_LIST_UPDATE_FAIL
} from "../contants/UserListConstants"
import axios from "axios";

export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get('/api/users', config )
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
    }

    catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            error:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const removeUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_REMOVE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(`/api/users/${id}`, config)
        dispatch({
            type: USER_REMOVE_SUCCESS,
            payload: data
        })
    }

    catch (error) {
        dispatch({
            type: USER_REMOVE_FAIL,
            error:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_UPDATE_REQUEST
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`

            }
        }

        const {data} = await axios.put(`/api/users/${user._id}`, user, config)
        dispatch({
            type: USER_LIST_UPDATE_SUCCESS,
            payload: data
        })
    }

    catch (error) {
        dispatch({
            type: USER_LIST_UPDATE_FAIL,
            error:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}