import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

export default function AdminAllProducts({ products }) {
  return (
    <>
      <Row className="justify-content-start">
        {products ? (
          products.map((item, index) => (
            <AdminAllProductsCard key={index} item={item} />
          ))
        ) : (
          <h4>لا يوجد منتجات حتي الان</h4>
        )}
      </Row>
    </>
  );
}
