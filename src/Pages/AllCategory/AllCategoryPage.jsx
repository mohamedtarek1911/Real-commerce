import React from "react";
import Pagination from "../../Components/Utlity/Pagination";
import CategoryContainer from "./CategoryContainer";

export default function AllCategoryPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <CategoryContainer />
        <div className="mt-5"></div>
        <Pagination />
      </div>
    </>
  );
}
