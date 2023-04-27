import {
  GET_ALL_BRAND,
  GET_ERROR,
  CREATE_BRAND,
  GET_ONE_BRAND,
  GET_ALL_BRAND_PRODUCTS,
} from "../Type";
import { UseGetData } from "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";

export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getAllBrandProducts = (limit) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/brands`);
    dispatch({
      type: GET_ALL_BRAND_PRODUCTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_BRAND_PRODUCTS,
      payload: e.response,
    });
  }
};

export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    // const res = await BaseURL.get(`/api/v1/categories`);
    const response = await UseGetData(`/api/v1/brands?limit=3&page=${page}`);
    console.log(response);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const craeteBrand = (formData) => async (dispatch) => {
  try {
    // const res = await BaseURL.get(`/api/v1/categories`);
    const response = await UseInsertDataImage(`/api/v1/brands`, formData);
    console.log(response);
    dispatch({
      type: CREATE_BRAND,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
      loading: false,
    });
  }
};
