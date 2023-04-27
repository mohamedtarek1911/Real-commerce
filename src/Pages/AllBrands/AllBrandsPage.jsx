import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import Pagination from "../../Components/Utlity/Pagination";
import AllBrandPageHook from "../../Hook/Brand/AllBrandPageHook";

export default function AllBrandsPage() {
  const [brand, loading, pageCount, getPage] = AllBrandPageHook();
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <BrandContainer data={brand.data} loading={loading} />
        <div className="my-5"></div>
        <Pagination pageCount={pageCount} onPress={getPage} />
      </div>
    </>
  );
}
