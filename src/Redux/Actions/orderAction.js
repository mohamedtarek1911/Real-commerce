import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import {
  GET_ALL_ORDER,
  GET_ONE_ORDER,
  UPDATE_ORDER_PAY,
  UPDATE_ORDER_DELIVER,
} from "../Type";

export const getAllOrder = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: e.response,
    });
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders/${id}`);
    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};

export const changeOrderPay = (id) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/orders/${id}/pay`);

    dispatch({
      type: UPDATE_ORDER_PAY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_PAY,
      payload: e.response,
    });
  }
};

export const changeOrderDeliver = (id) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/orders/${id}/deliver`);

    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload: e.response,
    });
  }
};
