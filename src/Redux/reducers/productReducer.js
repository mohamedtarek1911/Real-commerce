import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_ALL_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_BRAND,
} from "../Type";

const inital = {
  products: [],
  oneProduct: [],
  allProducts: [],
  updateProduct: [],
  productLike: [],
  deleteProducts: [],
  loading: true,
  allProductsCat: [],
  allProductsBrand: [],
};

const productReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT_CATEGORY:
      return {
        ...state,
        allProductsCat: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT_BRAND:
      return {
        ...state,
        allProductsBrand: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        deleteProducts: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        products: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
