import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DERAILS_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL
} from "../contants/ProductsConstants"

export const productListReducers = (state = {products: []}, action ) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST :
            return {
                loading : true,
                products : []
            }
        case PRODUCT_LIST_SUCCESS :
            return {
                loading: false,
                products: action.payload
            }

        case PRODUCT_LIST_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state
    }
}

export const productdetailsReducer = (state = {product: { reviews: [] }}, action ) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST :
            return {
                loading: true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS :
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DERAILS_FAIL :
            return {
                loading: false,
                error: action.payload
            }
        default :
            return state
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {

        case PRODUCT_CREATE_REQUEST :
            return {
                loading: true
            }

        case PRODUCT_CREATE_SUCCESS :
            return {
                loading: false,
                success: true,
                product: action.payload
            }

        case PRODUCT_CREATE_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}