import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ViewSearchProductHook from "../Product/ViewSearchProductHook";

export default function NavbarSearchHook() {
  const [items, pagination, getPage, getAllProducts, results] =
    ViewSearchProductHook();
  const [SearchWord, setSearchWord] = useState("");
  const handleSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);

    const path = window.location.pathname;
    if (path != "/AllProducts") {
      window.location.href = "/AllProducts";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getAllProducts();
    }, 1000);
  }, [SearchWord]);

  return [SearchWord, handleSearch];
}
