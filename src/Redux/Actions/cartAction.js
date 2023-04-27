import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_CART,
  CLEAR_ONE_CART,
  UPDATE_CART_ITEM,
  APPLY_COUPON,
} from "../Type";

export const addToCart = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/cart`, data);
    dispatch({
      type: ADD_TO_CART,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload: e.response,
    });
  }
};

export const getAllUserCart = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_ALL_USER_CART,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: e.response,
    });
  }
};

export const deleteCart = () => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/cart`);
    dispatch({
      type: CLEAR_CART,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_CART,
      payload: e.response,
    });
  }
};

export const deleteOneFromCart = (prodID) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/cart/${prodID}`);
    dispatch({
      type: CLEAR_ONE_CART,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ONE_CART,
      payload: e.response,
    });
  }
};

export const updateCartItem = (proID, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/cart/${proID}`, body);
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_CART_ITEM,
      payload: e.response,
    });
  }
};

export const applyCoupon = (body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart/applyCoupon`, body);
    dispatch({
      type: APPLY_COUPON,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON,
      payload: e.response,
    });
  }
};
