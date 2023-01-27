import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utlity/SubTitle";
import ProductsCard from "./ProductsCard";

export default function CardProductsContainer({ title, btntitle, pathTitle }) {
  return (
    <>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathTitle={pathTitle} />
        <Row className="d-flex mt-3 justify-content-between">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </Row>
      </Container>
    </>
  );
}
