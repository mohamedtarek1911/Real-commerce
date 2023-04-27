import {
  ADD_NEW_ADDRESS,
  GET_ALL_ADDRESS,
  DELETE_ADDRESS,
  ONE_ADDRESS,
  EDIT_ADDRESS,
} from "../Type";
const inital = {
  loading: true,
  newAddress: [],
  allAddress: [],
  deleteAddress: [],
  getOneAddress: [],
  editAddress: [],
};
const addressReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_NEW_ADDRESS:
      return {
        ...state,
        newAddress: action.payload,
      };

    case GET_ALL_ADDRESS:
      return {
        ...state,
        allAddress: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case ONE_ADDRESS:
      return {
        ...state,
        getOneAddress: action.payload,
      };

    case EDIT_ADDRESS:
      return {
        ...state,
        editAddress: action.payload,
      };

    default:
      return state;
  }
};

export default addressReducer;
