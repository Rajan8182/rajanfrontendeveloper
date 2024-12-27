import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , PRODUCT_ADD , PRODUCT_SET } from "./Constant";


const CartReducer = (state = [] , action) => {
    switch(action.type){
        case ADD_TO_CART : return [...state , action.payload]
        case REMOVE_TO_CART : 
        let remainItem = state.filter(index => index.id)

        console.log(remainItem);
        
        return [...remainItem]

        case EMPTY_CART : return{
            
        }
        default : return state
    }
}

export const productReducer = (state = [] , action) => {
    switch(action.type){
        // case PRODUCT_ADD: 
        // console.log('ProductReducerAdd Called' , action);
        // return [action.data]
        case PRODUCT_SET:
            console.log('ProductReducerSet Called' , action);
            return [action.data]
        default: return state
    }
}

export default CartReducer