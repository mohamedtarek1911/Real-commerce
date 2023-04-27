import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/Actions/CategoryAction";

export default function AllCategoryPageHook() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.allCategory.category);
  let loading = useSelector((state) => state.allCategory.loading);

  let pageCount = 0;

  try {
    if (data.paginationResult) {
      console.log(data.paginationResult.numberOfPages);
      pageCount = data.paginationResult.numberOfPages;
    }
  } catch (e) {}
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(3));
    };
    get();
  }, []);

  return [data, loading, pageCount, getPage];
}
