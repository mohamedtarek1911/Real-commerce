import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../Type";

const inital = {
  addToWishlist: [],
  removeFromWishlist: [],
  allWishlist: [],
};

const wishlistReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addToWishlist: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeFromWishlist: action.payload,
      };
    case USER_WISHLIST:
      return {
        ...state,
        allWishlist: action.payload,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
