import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productdetailsReducer } from './reducers/ProductReducers'


const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productdetailsReducer
})

const initialState = {}

const middleare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleare))
)

export default store