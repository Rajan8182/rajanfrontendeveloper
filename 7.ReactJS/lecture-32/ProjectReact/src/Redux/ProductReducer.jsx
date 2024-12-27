import {PRODUCT_SET} from './Constant'

const ProductReducer = (state = [] , action) => {
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

export default ProductReducer