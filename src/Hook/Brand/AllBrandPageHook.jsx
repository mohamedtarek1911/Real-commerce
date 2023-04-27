import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand, getAllBrandPage } from "../../Redux/Actions/brandAction";

export default function AllBrandPageHook() {
  let dispatch = useDispatch();
  let brand = useSelector((state) => state.allBrand.brand);
  let loading = useSelector((state) => state.allBrand.loading);
  console.log(brand);
  console.log(loading);
  let pageCount = 0;
  if (brand.paginationResult) {
    console.log(brand.paginationResult.numberOfPages);
    pageCount = brand.paginationResult.numberOfPages;
  }
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  useEffect(() => {
    dispatch(getAllBrand(3));
  }, []);

  return [brand, loading, pageCount, getPage];
}
