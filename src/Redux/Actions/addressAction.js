import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import {
  ADD_NEW_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  ONE_ADDRESS,
  EDIT_ADDRESS,
} from "../Type";

export const craeteNewAddress = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/addresses`, data);
    dispatch({
      type: ADD_NEW_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_NEW_ADDRESS,
      payload: e.response,
    });
  }
};

export const getAllAddress = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses`);
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ADDRESS,
      payload: e.response,
    });
  }
};

export const deleteAddress = (addressID) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/addresses/${addressID}`);
    dispatch({
      type: DELETE_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: e.response,
    });
  }
};

export const editAddress = (addressID, body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/addresses/${addressID}`,
      body
    );
    dispatch({
      type: EDIT_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_ADDRESS,
      payload: e.response,
    });
  }
};

export const getOneAddress = (addressID) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses/${addressID}`);
    dispatch({
      type: ONE_ADDRESS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ONE_ADDRESS,
      payload: e.response,
    });
  }
};
