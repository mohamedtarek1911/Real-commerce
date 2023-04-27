import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utlity/Pagination";
import ViewProductsCategoryHook from "../../Hook/Product/ViewProductsCategoryHook";
import { useParams } from "react-router";
import ViewProductsBrandHook from "../../Hook/Product/ViewProductsBrandHook";

export default function ProductByBrand() {
  const { id } = useParams();

  console.log(id);

  const [items, pagination, getPage] = ViewProductsBrandHook(id);
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  console.log(items);
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row className="d-flex flex-row">
            <Col sm="12">
              <CardProductsContainer
                products={items}
                title={""}
                btntitle={""}
              />
            </Col>
          </Row>
          {pageCount > 1 ? (
            <Pagination pageCount={pageCount} onPress={getPage} />
          ) : null}
        </Container>
      </div>
    </>
  );
}
