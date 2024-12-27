import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Constant";


const initialState = {
    Count:0
}


const Reducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART : return{
            ...state,
            Count:state.Count + 1
        }
        case REMOVE_TO_CART : return{
            ...state,
            Count:state.Count - 1
        }
        case EMPTY_CART : return{
            ...state,
            Count:0
        }
        default : return state
    }
}

export default Reducer