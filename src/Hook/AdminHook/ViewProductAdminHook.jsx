import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  getAllProductsPage,
} from "../../Redux/Actions/ProductAction";

export default function ViewProductAdminHook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct(2));
  }, []);
  const allProducts = useSelector((state) => state.allProduct.allProducts);
  // console.log(allProducts);
  let items = [];

  let pagination = [];
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }

    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}
  const getPage = async (page) => {
    await dispatch(getAllProductsPage(page, 2));
  };
  return [items, pagination, getPage];
}
