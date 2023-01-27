import React from "react";
import { Row } from "react-bootstrap";
import ProductsCard from "../Products/ProductsCard";
import Pagination from "../Utlity/Pagination";

export default function UserFavoritesProducts() {
  return (
    <>
      <div>
        <div className="admin-content-text pb-4">قائمة المفضلة</div>
        <Row className="justify-content-start">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </Row>
        <Pagination />
      </div>
    </>
  );
}
