import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    REVIEW_CREATE_REQUEST,
    REVIEW_CREATE_SUCCESS,
    REVIEW_CREATE_FAIL,
    REVIEW_CREATE_RESET
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

        case PRODUCT_DETAILS_FAIL :
            return {
                loading: false,
                error: action.payload
            }
        default :
            return state
    }
}


export const deleteproductReducer = (state = {}, action) => {
    switch (action.type) {

        case PRODUCT_DELETE_REQUEST :
            return {
                loading : true
            }

        case PRODUCT_DELETE_SUCCESS :
            return {
                loading: false,
                product: action.payload,
                success: true
            }

        case PRODUCT_DELETE_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        default :
            return state

    }
}

export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST :
            return {
                loading : true
            }

        case PRODUCT_UPDATE_SUCCESS :
            return {
                loading: false,
                product: action.payload,
                success: true
            }

        case PRODUCT_UPDATE_FAIL :
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

export const reviewReducers = (
    state = {reviews: []},
    action
) => {
    switch (action.type) {
        case REVIEW_CREATE_REQUEST :
            return {
                loading: true,
                reviews: []
            }

        case REVIEW_CREATE_SUCCESS :
            return {
                loading: false,
                success: action.payload
            }

        case REVIEW_CREATE_FAIL :
            return {
                loading: false,
                error: action.payload
            }

        case REVIEW_CREATE_RESET :
            return {}

        default :
            return state
    }
}