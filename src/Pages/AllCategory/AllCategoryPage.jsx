import React from "react";
import Pagination from "../../Components/Utlity/Pagination";
import CategoryContainer from "../../Components/Category/CategoryContainer";
// import axios from "axios";
import { useEffect } from "react";
// import BaseURL from "../../API/BaseURL";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/Actions/CategoryAction";
import AllCategoryPageHook from "../../Hook/Category/AllCategoryPageHook";
export default function AllCategoryPage() {
  const [data, loading, pageCount, getPage] = AllCategoryPageHook();

  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <CategoryContainer data={data.data} />
        <div className="mt-5"></div>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null}
      </div>
    </>
  );
}
