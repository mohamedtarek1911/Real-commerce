import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/brandAction";

export default function HomeBrandHook() {
  let dispatch = useDispatch();
  let brand = useSelector((state) => state.allBrand.brand);
  let loading = useSelector((state) => state.allBrand.loading);
  // console.log(brand.data);
  // console.log(loading);

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  return [brand, loading];
}
