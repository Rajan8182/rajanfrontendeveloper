import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";
import WishlistReducer from "./WishlistReducer";

const rootReducer = combineReducers({
    cart:CartReducer,
    product:ProductReducer,
    wishlist: WishlistReducer
})

export default rootReducer