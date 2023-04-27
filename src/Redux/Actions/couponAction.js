import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import {
  CREATE_NEW_COUPON,
  GET_ALL_COUPON,
  DELETE_COUPON,
  EDIT_COUPON,
  ONE_COUPON,
} from "../Type";

export const craeteNewCoupon = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/coupons`, data);
    dispatch({
      type: CREATE_NEW_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_COUPON,
      payload: e.response,
    });
  }
};

export const getAllCoupon = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons`);
    dispatch({
      type: GET_ALL_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPON,
      payload: e.response,
    });
  }
};

export const deleteCoupon = (couponID) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/coupons/${couponID}`);
    dispatch({
      type: DELETE_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload: e.response,
    });
  }
};

export const editCoupon = (couponID, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/coupons/${couponID}`,
      body
    );
    dispatch({
      type: EDIT_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_COUPON,
      payload: e.response,
    });
  }
};

export const getOneCoupon = (couponID) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons/${couponID}`);
    dispatch({
      type: ONE_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ONE_COUPON,
      payload: e.response,
    });
  }
};
