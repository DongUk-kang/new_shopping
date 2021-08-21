import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productdetailsReducer } from './reducers/ProductReducers'
import { useLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateReducers } from './reducers/UserReducers'
import { cartReducers } from './reducers/CartReducers'
import { orderCreateReducers, orderDetailsReducer, orderListMyReducer } from "./reducers/OrderReducers"
import { userListReducers } from "./reducers/UserListReducers"


const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productdetailsReducer,
    userLogin: useLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducers,
    userUpdate: userUpdateReducers,
    cart: cartReducers,
    orderCreate: orderCreateReducers,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    userList: userListReducers
})

const userInfoFromStorage = localStorage.getItem(`userInfo`)
    ? JSON.parse(localStorage.getItem(`userInfo`))
    : null

const cartItemsFromStorage = localStorage.getItem(`cartItems`)
    ? JSON.parse(localStorage.getItem(`cartItems`))
    : []

const shippingAddressFromStorage = localStorage.getItem(`shippingAddress`)
    ? JSON.parse(localStorage.getItem(`shippingAddress`))
    : {}



const initialState = {
    userLogin: { userInfo: userInfoFromStorage  },
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store