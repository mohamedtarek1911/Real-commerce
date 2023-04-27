import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/Actions/ProductAction";
export default function ViewSearchProductHook() {
  let limit = 4;
  let sortType = "";
  let sort = "";
  let queryCat = "";
  let queryBrand = "";
  let priceFrom = "";
  let priceTo = "";
  let priceFromString = "";
  let priceToString = "";
  let word = "";
  const dispatch = useDispatch();
  const getAllProducts = async () => {
    sortData();
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("cayegoryChecked") != null) {
      queryCat = localStorage.getItem("cayegoryChecked");
    }
    if (localStorage.getItem("brandChecked") != null) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }

    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const allProducts = useSelector((state) => state.allProduct.allProducts);
  let items = [];
  let pagination = [];
  let results = 0;
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {}
  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else {
      results = 0;
    }
  } catch (e) {}

  const getPage = async (page) => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("categoryChecked") != null) {
      queryCat = localStorage.getItem("categoryChecked");
    }
    if (localStorage.getItem("brandChecked") != null) {
      queryBrand = localStorage.getItem("brandChecked");
    }
    if (localStorage.getItem("priceFrom") != null) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
    sortData();
    await dispatch(
      getAllProductsSearch(
        `limit=${limit}&page=${page}&keyword=${word}&sort=${sort}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };

  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "بدون ترتيب") {
      sort = "";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييا") {
      sort = "+ratingsQuantity";
    } else if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    }
  };

  return [items, pagination, getPage, getAllProducts, results];
}
