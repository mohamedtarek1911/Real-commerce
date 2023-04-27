import UseDeleteData from "../../Hooks/UseDeleteData";
import { useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../Type";

export const addProductToWishlist = (body) => async (dispatch) => {
  try {
    const response = await UseInsertData(`/api/v1/wishlist`, body);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: e.respose,
    });
  }
};

export const removeProductToWishlist = (proId) => async (dispatch) => {
  try {
    const response = await UseDeleteData(`/api/v1/wishlist/${proId}`);
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: e.respose,
    });
  }
};

export const getAllProductWishlist = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/wishlist`);
    dispatch({
      type: USER_WISHLIST,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: USER_WISHLIST,
      payload: e.respose,
    });
  }
};
