import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productdetailsReducer } from './reducers/ProductReducers'
import {useLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateReducers} from './reducers/UserReducers'
import { cartReducers } from './reducers/CartReducers'



const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productdetailsReducer,
    userLogin: useLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdate: userUpdateReducers,
    cart: cartReducers
})

const userInfoFromStorage = localStorage.getItem(`userInfo`)
    ? JSON.parse(localStorage.getItem(`userInfo`))
    : null

const cartItemsFromStorage = localStorage.getItem(`cartItems`)
    ? JSON.parse(localStorage.getItem(`cartItems`))
    : []


const initialState = {
    userLogin: { userInfo: userInfoFromStorage  },
    cart: { cartItems: cartItemsFromStorage }
}

const middlweare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlweare))
)

export default store