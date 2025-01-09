import { WISHLIST_ADD, WISHLIST_REMOVE, WISHLIST_EMPTY } from "./Constant";

const initialState = {
  wishlist: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_ADD:
      const existingProduct = state.wishlist.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return {
          ...state,
          wishlist: state.wishlist.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload, quantity: 1 }],
        };
      }

    case WISHLIST_REMOVE:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
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