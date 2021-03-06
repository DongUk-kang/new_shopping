import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productdetailsReducer, productCreateReducer, deleteproductReducer, updateProductReducer, reviewReducers } from './reducers/ProductReducers'
import { useLoginReducers, userRegisterReducers, userDetailsReducers, userUpdateReducers } from './reducers/UserReducers'
import { cartReducers } from './reducers/CartReducers'
import { orderCreateReducers, orderDetailsReducer, myOrderListReducer, payOrderReducer, deliverOrderReducer, adminOrderList, adminOrderDetail } from "./reducers/OrderReducers"
import {userListReducers, removeUserReducers, updateUserReducer} from "./reducers/UserListReducers"

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
    orderListMy: myOrderListReducer,
    userList: userListReducers,
    deleteUser: removeUserReducers,
    productCreate: productCreateReducer,
    payOrder: payOrderReducer,
    Orderdeliver: deliverOrderReducer,
    deleteproducts: deleteproductReducer,
    updateProducts: updateProductReducer,
    userListUpdate: updateUserReducer,
    adminListOrder: adminOrderList,
    adminDetailOrder: adminOrderDetail,
    createComment: reviewReducers
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