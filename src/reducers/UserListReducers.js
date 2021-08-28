import {
    USER_LIST_FAIL,
    USER_LIST_SUCCESS,
    USER_LIST_REQUEST,
    USER_REMOVE_SUCCESS,
    USER_REMOVE_REQUEST,
    USER_REMOVE_FAIL,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL
} from "../contants/UserListConstants"

export const userListReducers = (
    state = [],
    action
) => {
    switch (action.type) {
        case USER_LIST_REQUEST :
            return {
                loading: true
            }

        case USER_LIST_SUCCESS :
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}

export const removeUserReducers = (
    state = {},
    action
) => {
    switch (action.type) {

        case USER_REMOVE_REQUEST :
            return {
                loading: true
            }

        case USER_REMOVE_SUCCESS :
            return {
                loading: false,
                // users: action.payload
                success: true
            }

        case USER_REMOVE_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}

export const updateUserReducer = (
    state = {},
    action
) => {
    switch (action.type) {

        case USER_UPDATE_REQUEST :
            return {
                loading: true
            }

        case USER_UPDATE_SUCCESS :
            return {
                loading: false,
                user: action.payload,
                success: true
            }

        case USER_UPDATE_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}