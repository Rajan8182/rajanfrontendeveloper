import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
