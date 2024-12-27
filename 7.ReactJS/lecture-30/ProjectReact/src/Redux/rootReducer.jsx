import { productReducer } from "./Reducer";
import { combineReducers } from "redux";
import CartReducer from "./Reducer";

const rootReducer = combineReducers({
    cart:CartReducer,
    product:productReducer
})

export default rootReducer