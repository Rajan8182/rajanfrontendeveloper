import { WISHLIST_ADD , WISHLIST_REMOVE , WISHLIST_EMPTY } from "./Constant";

const WishlistReducer = (state = [] , action) => {
    switch(action.type){
        case WISHLIST_ADD: return[...state , action.payload]
        case WISHLIST_REMOVE:
            let remainItem = state.filter(state => state.id != action.payload.id)

            console.log(remainItem);

            return [...remainItem]
            
        case WISHLIST_EMPTY: return state = []
        default:return state
    }
}

export default WishlistReducer