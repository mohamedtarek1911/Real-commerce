import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/brandAction";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import ViewSearchProductHook from "../Product/ViewSearchProductHook";

export default function SideFilterSearchHook() {
  const [items, pagination, getPage, getAllProducts, results] =
    ViewSearchProductHook();
  let dispatch = useDispatch();
  const [CategoryChecked, setCategoryChecked] = useState([]);
  const [BrandChecked, setBrandChecked] = useState([]);
  const [PriceFrom, setPriceFrom] = useState(0);
  const [PriceTo, setPriceTo] = useState(0);

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    run();
  }, []);
  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  let brand = [];
  var queryCat = "";
  var queryBrand = "";
  if (allCat.data) {
    category = allCat.data;
  }
  if (allBrand.data) {
    brand = allBrand.data;
  }

  const handleClickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCategoryChecked([]);
    } else {
      if (e.target.checked === true) {
        setCategoryChecked([...CategoryChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = CategoryChecked.filter((e) => e !== value);
        setCategoryChecked(newArray);
      }
    }
    console.log(CategoryChecked);
  };

  useEffect(() => {
    queryCat = CategoryChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("categoryChecked", queryCat);
    setTimeout(() => {
      getAllProducts();
    }, 1000);
  }, [CategoryChecked]);

  const handleClickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...BrandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = BrandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
    console.log(BrandChecked);
  };

  useEffect(() => {
    queryBrand = BrandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getAllProducts();
    }, 1000);
  }, [BrandChecked]);

  useEffect(() => {
    setTimeout(() => {
      getAllProducts();
    }, 1000);
  }, [PriceFrom, PriceTo]);

  const handlePriceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };
  const handlePriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  return [
    category,
    brand,
    handleClickCategory,
    handleClickBrand,
    handlePriceFrom,
    handlePriceTo,
  ];
}
