import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../Redux/Actions/ProductAction";

export default function ViewHomeProductHook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const allProducts = useSelector((state) => state.allProduct.allProducts);

  let items = [];
  try {
    if (allProducts.data.slice(0, 4)) {
      items = allProducts.data.slice(0, 4);
    } else {
      items = [];
    }
  } catch (e) {}
  return [items];
}
