import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductByBrand } from "../../Redux/Actions/ProductAction";

export default function ViewProductsBrandHook(id) {
  let limit = 4;
  let items = [];
  let pagination = [];

  console.log(id);

  const dispatch = useDispatch();

  const ProductsBrand = useSelector(
    (state) => state.allProduct.allProductsBrand
  );

  console.log(ProductsBrand);

  const getProductsBrand = async () => {
    await dispatch(getAllProductByBrand(limit, "", id));
  };

  useEffect(() => {
    getProductsBrand();
  }, []);

  try {
    if (ProductsBrand.data) {
      items = ProductsBrand.data;
    } else {
      items = [];
    }
  } catch (e) {}

  try {
    if (ProductsBrand.paginationResult) {
      pagination = ProductsBrand.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  const getPage = async (page) => {
    await dispatch(getAllProductByBrand(limit, page, id));
  };

  return [items, pagination, getPage];
}
