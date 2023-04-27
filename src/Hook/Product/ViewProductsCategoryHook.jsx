import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductByCategory } from "../../Redux/Actions/ProductAction";
export default function ViewProductsCategoryHook(id) {
  let limit = 4;
  let items = [];
  let pagination = [];

  console.log(id);

  const dispatch = useDispatch();

  const ProductsCat = useSelector((state) => state.allProduct.allProductsCat);

  console.log(ProductsCat);

  const getProductsCat = async () => {
    await dispatch(getAllProductByCategory(limit, "", id));
  };

  useEffect(() => {
    getProductsCat();
  }, []);

  try {
    if (ProductsCat.data) {
      items = ProductsCat.data;
    } else {
      items = [];
    }
  } catch (e) {}

  try {
    if (ProductsCat.paginationResult) {
      pagination = ProductsCat.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  const getPage = async (page) => {
    await dispatch(getAllProductByCategory(limit, page, id));
  };

  return [items, pagination, getPage];
}
