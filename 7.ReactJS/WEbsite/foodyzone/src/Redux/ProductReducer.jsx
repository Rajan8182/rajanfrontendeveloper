import { PRODUCT_LIST , PRODUCT_ADD } from './Constant'; 

const ProductReducer = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log('ProductReducerSet Called', action);
      return action.data;
    case PRODUCT_ADD:
      console.log('ProductReducerSet Called', action);
      return action.data;
      
    default:
      return data;
  }
};

export default ProductReducer;
