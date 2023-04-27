import { CREATE_SUB_CATEGORY, GET_ERROR, GET_SUB_CATEGORY } from "../Type";
// import {UseGetData} from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import { UseGetData } from "../../Hooks/UseGetData";

//gcreate sub category with pagination
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await UseInsertData("/api/v1/subcategories", data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get sub category depend on id
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await UseGetData(`/api/v1/categories/${id}/subcategories`);
    console.log(response.data);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
