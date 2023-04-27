import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import { CREATE_ORDER_CASH, CREATE_ORDER_CARD } from "../Type";

//create order cash fro user
export const createOrderPayCash = (id, body) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/orders/${id}`, body);

    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};

export const createOrderPayCard = (id, body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders/checkout-session/${id}`,
      body
    );

    dispatch({
      type: CREATE_ORDER_CARD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CARD,
      payload: e.response,
    });
  }
};
