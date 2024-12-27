import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART  , PRODUCT_ADD, PRODUCT_SET } from "./Constant";

export function add_to_cart(cartData){
    return{
        type:ADD_TO_CART,
        payload:cartData
    }
}

export function remove_to_cart(cartData){
    return{
        type:REMOVE_TO_CART,
        payload:cartData
    }
}

export function empty_cart(){
    return{
        type:EMPTY_CART
    }
}

export const productData = (data) => {
    return{
        type:PRODUCT_ADD,
        data
    }
}