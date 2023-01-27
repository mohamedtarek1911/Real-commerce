import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGalary from "./ProductGalary";
import ProductTextDetails from "./ProductTextDetails";

export default function ProductDetails() {
  return (
    <>
      <Row className="py-4">
        <Col lg="4">
          <ProductGalary />
        </Col>
        <Col lg="8">
          <ProductTextDetails />
        </Col>
      </Row>
    </>
  );
}
