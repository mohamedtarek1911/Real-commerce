import {
  CREATE_REVIEW,
  ALL_REVIEW_PRODUCTS,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "../Type";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertDataImage, UseInsertData } from "../../Hooks/UseInsertData";
import UseDeleteData from "../../Hooks/UseDeleteData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";

export const craeteReview = (proID, body) => async (dispatch) => {
  try {
    const response = await UseInsertData(
      `/api/v1/products/${proID}/reviews`,
      body
    );
    console.log(response);
    dispatch({
      type: CREATE_REVIEW,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
      loading: false,
    });
  }
};

export const allReviewProducts = (proID, page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/products/${proID}/reviews?page=${page}&limit=${limit}`
    );
    dispatch({
      type: ALL_REVIEW_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEW_PRODUCTS,
      payload: e.response,
      loading: false,
    });
  }
};

export const deleteReviewOnProduct = (id) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/reviews/${id}`);

    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

export const updateReviewOnProduct = (id, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/reviews/${id}`, body);

    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};
