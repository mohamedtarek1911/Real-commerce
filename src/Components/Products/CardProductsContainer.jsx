import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utlity/SubTitle";
import ProductsCard from "./ProductsCard";
import CardProductsContainerHook from "../../Hook/Product/CardProductsContainerHook";

export default function CardProductsContainer({
  title,
  btntitle,
  pathTitle,
  products,
}) {
  const [FavProducts] = CardProductsContainerHook();

  let pros = [];
  if (products) {
    pros = products;
  } else {
    pros = [];
  }

  return (
    <>
      <Container>
        {products ? (
          <SubTitle title={title} btntitle={btntitle} pathTitle={pathTitle} />
        ) : null}
        <Row className="d-flex mt-3 justify-content-between">
          {products
            ? products.map((item, index) => {
                return (
                  <ProductsCard
                    FavProducts={FavProducts}
                    key={index}
                    item={item}
                  />
                );
              })
            : null}
        </Row>
      </Container>
    </>
  );
}
