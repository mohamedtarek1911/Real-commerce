import UseDeleteData from "../../Hooks/UseDeleteData";
import { UseGetData, useGetDataToken } from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { useInsUpdateData } from "../../Hooks/UseUpdateData";
import { EDIT_USER_PROFILE, EDIT_USER_PASSWORD } from "../Type";

export const editUserProfile = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`/api/v1/users/updateMe`, body);
    dispatch({
      type: EDIT_USER_PROFILE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_USER_PROFILE,
      payload: e.response,
    });
  }
};

export const editUserPassword = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `/api/v1/users/changeMyPassword`,
      body
    );
    dispatch({
      type: EDIT_USER_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_USER_PASSWORD,
      payload: e.response,
    });
  }
};
