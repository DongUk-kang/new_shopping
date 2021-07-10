import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers } from './reducers/ProductReducers'

const reducer = combineReducers({
    productList: productListReducers
})

const initialState = {}

const middleare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleare))
)

export default store