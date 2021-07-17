import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productdetailsReducer } from './reducers/ProductReducers'
import { useLoginReducers, userRegisterReducers } from './reducers/UserReducers'



const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productdetailsReducer,
    userLogin: useLoginReducers,
    userRegister: userRegisterReducers
})

const userInfoFromStorage = localStorage.getItem(`userInfo`)
    ? JSON.parse(localStorage.getItem(`userInfo`))
    : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage  },
}

const middlweare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlweare))
)

export default store