import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
  GET_ALL_CATEGORY_HEADER,
} from "../Type";
// import BaseURL from "../../API/BaseURL";
import { UseGetData } from "../../Hooks/UseGetData";
import { UseInsertDataImage } from "../../Hooks/UseInsertData";

export const getAllCategory = (limit) => async (dispatch) => {
  try {
    // const res = await BaseURL.get(`/api/v1/categories`);
    const response = await UseGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    // const res = await BaseURL.get(`/api/v1/categories`);
    const response = await UseGetData(
      `/api/v1/categories?limit=3&page=${page}`
    );
    console.log(response);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "error" + e,
    });
  }
};

export const craeteCategory = (formData) => async (dispatch) => {
  try {
    // const res = await BaseURL.get(`/api/v1/categories`);
    const response = await UseInsertDataImage(`/api/v1/categories`, formData);
    console.log(response);
    dispatch({
      type: CREATE_CATEGORY,
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

export const getAllCategoryHeader = () => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/categories`);
    console.log(response);
    dispatch({
      type: GET_ALL_CATEGORY_HEADER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_CATEGORY_HEADER,
      payload: e.response,
    });
  }
};
