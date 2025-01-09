import { ADD_TO_CART , REMOVE_TO_CART  , EMPTY_CART , PRODUCT_ADD , PRODUCT_LIST , WISHLIST_ADD, WISHLIST_EMPTY, WISHLIST_REMOVE } from "./Constant"

export function add_to_cart(cartData){
    return{
        type:ADD_TO_CART,
        info:"addToCart Called",
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


export const Wishlist_Add = (wishlistdata) => {
    return{
        type:WISHLIST_ADD,
        payload:wishlistdata
    }
}

export const Wishlist_remove = (wishlistdata) => {
    return{
        type:WISHLIST_REMOVE,
        payload:wishlistdata
    }
}

export const Wishlist_Empty = () => {
    return{
        type:WISHLIST_EMPTY
    }
}

export const productData = () => {
    return{
        type:PRODUCT_ADD,
        data:"apple"
    }
}

// export const productData = () => {
//     return{
//         type:PRODUCT_LIST,
//         data:'apple'
//     }
// }

