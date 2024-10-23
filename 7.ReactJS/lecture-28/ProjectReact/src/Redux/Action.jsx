import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant";

export function add_to_cart(){
    return{
        type:ADD_TO_CART
    }
}

export function remove_to_cart(){
    return{
        type:REMOVE_TO_CART
    }
}

export function empty_cart(){
    return{
        type:EMPTY_CART
    }
}