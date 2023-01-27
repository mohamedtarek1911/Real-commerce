import React from "react";
import Pagination from "../../Components/Utlity/Pagination";
import BrandContainer from "./BrandContainer";

export default function AllBrandsPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <BrandContainer />
        <div className="my-5"></div>
        <Pagination />
      </div>
    </>
  );
}
