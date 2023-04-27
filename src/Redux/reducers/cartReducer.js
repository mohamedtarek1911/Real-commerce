import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_CART,
  CLEAR_ONE_CART,
  UPDATE_CART_ITEM,
  APPLY_COUPON,
} from "../Type";
const inital = {
  loading: true,
  addToCart: [],
  getAllUserCart: [],
  clearCart: [],
  deleteOneFromCert: [],
  updateCartItem: [],
  applyCoupon: [],
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };

    case GET_ALL_USER_CART:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        clearCart: action.payload,
      };

    case CLEAR_ONE_CART:
      return {
        ...state,
        deleteOneFromCert: action.payload,
      };

    case UPDATE_CART_ITEM:
      return {
        ...state,
        updateCartItem: action.payload,
      };

    case APPLY_COUPON:
      return {
        ...state,
        applyCoupon: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
