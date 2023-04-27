import {
  CREATE_NEW_COUPON,
  GET_ALL_COUPON,
  DELETE_COUPON,
  EDIT_COUPON,
  ONE_COUPON,
} from "../Type";
const inital = {
  loading: true,
  newCoupon: [],
  allCoupon: [],
  deleteCoupon: [],
  editCoupon: [],
  oneCoupon: [],
};
const couponReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_NEW_COUPON:
      return {
        ...state,
        newCoupon: action.payload,
      };

    case GET_ALL_COUPON:
      return {
        ...state,
        allCoupon: action.payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };

    case EDIT_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };

    case ONE_COUPON:
      return {
        ...state,
        oneCoupon: action.payload,
      };

    default:
      return state;
  }
};

export default couponReducer;
