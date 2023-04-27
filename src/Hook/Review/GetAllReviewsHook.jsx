import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  allReviewProducts,
  craeteReview,
} from "../../Redux/Actions/reviewAction";
import notify from "../UseNotfications";
export default function GetAllReviewsHook(id) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  const allReviews = useSelector((state) => state.reviewReducer.getAllReviews);
  if (allReviews) {
    console.log(allReviews);
  }

  let pageCount = 0;
  if (allReviews.paginationResult) {
    // console.log(brand.paginationResult.numberOfPages);
    pageCount = allReviews.paginationResult.numberOfPages;
  }

  useEffect(() => {
    setLoading(true);
    dispatch(allReviewProducts(id, 1, 3));
    setLoading(false);
  }, []);

  const getPage = async (page) => {
    await dispatch(allReviewProducts(id, page, 3));
  };

  return [allReviews, getPage, pageCount];
}
