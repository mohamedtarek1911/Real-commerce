import { UseGetData } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import {
  LOGIN_USER,
  GET_ERROR,
  CREATE_NEW_USER,
  GET_CURRENT_USER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  REST_PASSWORD,
} from "../Type";

export const craeteNewUser = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/users/getMe`);
    dispatch({
      type: GET_CURRENT_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: e.response,
    });
  }
};

export const restPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/auth/resetPassword`.data);
    dispatch({
      type: REST_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: REST_PASSWORD,
      payload: e.response,
    });
  }
};

export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/auth/forgotPasswords`, data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: e.response,
    });
  }
};

export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/auth/verifyResetCode`, data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};
