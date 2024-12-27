import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , PRODUCT_SET } from "./Constant";


const CartReducer = (state = [] , action) => {
    switch(action.type){
        case ADD_TO_CART : return [...state , action.payload]

        case REMOVE_TO_CART : 
        let remainItem = state.filter(state => state.id !== action.payload.id)

        console.log(remainItem);
        
        return [...remainItem]

        case EMPTY_CART : return state  = []

        default : return state
    }
}

export default CartReducer