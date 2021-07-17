import axios from "axios";
import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL
} from '../contants/UserConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const {data} = await axios.post('/api/users/login', {email, password})
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // localstorage 유저정보 저장
        localStorage.setItem("userInfo", JSON.stringify(data))

    }
    catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}