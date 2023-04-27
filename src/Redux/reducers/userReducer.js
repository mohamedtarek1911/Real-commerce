import { EDIT_USER_PROFILE, EDIT_USER_PASSWORD } from "../Type";
const inital = {
  loading: true,
  editPassword: [],
  editProfile: [],
};
const userReducer = (state = inital, action) => {
  switch (action.type) {
    case EDIT_USER_PROFILE:
      return {
        ...state,
        editProfile: action.payload,
      };
    case EDIT_USER_PASSWORD:
      return {
        ...state,
        editPassword: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
