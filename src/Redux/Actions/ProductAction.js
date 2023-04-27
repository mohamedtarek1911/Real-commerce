import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData } from "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";
import { useInUpdateDataWithImage } from "../../Hooks/UseUpdateData";
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

export const craeteProduct = (formData) => async (dispatch) => {
  try {
    const response = await UseInsertDataImage(`/api/v1/products`, formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getAllProduct = (limit) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getAllProductByCategory =
  (limit, page, catID) => async (dispatch) => {
    try {
      const response = await UseGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category=${catID}`
      );
      console.log(response);
      dispatch({
        type: GET_ALL_PRODUCT_CATEGORY,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCT_CATEGORY,
        payload: e.response,
      });
    }
  };

export const getAllProductByBrand =
  (limit, page, brandID) => async (dispatch) => {
    try {
      const response = await UseGetData(
        `/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`
      );
      console.log(response);
      dispatch({
        type: GET_ALL_PRODUCT_BRAND,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCT_BRAND,
        payload: e.response,
      });
    }
  };

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await UseGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const response = await useInUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({
      type: DELETE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
