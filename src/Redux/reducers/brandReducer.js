import {
  GET_ALL_BRAND,
  GET_ERROR,
  CREATE_BRAND,
  GET_ONE_BRAND,
  GET_ALL_BRAND_PRODUCTS,
} from "../Type";

const inital = { brand: [], oneBrand: [], allBrandPro: [], loading: true };

const brandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case GET_ALL_BRAND_PRODUCTS:
      return {
        ...state,
        allBrandPro: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return { brand: action.payload, loading: false };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default brandReducer;
