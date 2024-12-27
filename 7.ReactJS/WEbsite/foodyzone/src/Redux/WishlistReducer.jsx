// reducers/wishlistReducer.js
import { WISHLIST_ADD, WISHLIST_REMOVE, WISHLIST_EMPTY } from "./Constant";

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_ADD:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case WISHLIST_REMOVE:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    case WISHLIST_EMPTY:
      return {
        ...state,
        wishlist: [],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
