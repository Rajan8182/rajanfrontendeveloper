import { PRODUCT_SET } from './Constant'; // Ensure all constants are imported

const ProductReducer = (state = [], action) => {
  switch (action.type) {
    
    case PRODUCT_SET:
      console.log('ProductReducerSet Called', action);
      return [...state , action.data];

    default:
      return state;
  }
};

export default ProductReducer;
