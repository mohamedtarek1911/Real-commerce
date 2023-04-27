import {
  CREATE_REVIEW,
  ALL_REVIEW_PRODUCTS,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "../Type";
const inital = {
  craeteReview: [],
  getAllReviews: [],
  deleteReview: [],
  updateReview: [],
  loading: true,
};
const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        craeteReview: action.payload,
        loading: false,
      };

    case ALL_REVIEW_PRODUCTS:
      return {
        ...state,
        getAllReviews: action.payload,
        loading: false,
      };

    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
      };

    case UPDATE_REVIEW:
      return {
        ...state,
        updateReview: action.payload,
      };

    default:
      return state;
  }
};

export default reviewReducer;
