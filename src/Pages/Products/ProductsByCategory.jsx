import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchCountResult from "../../Components/Utlity/SearchCountResult";
import SideFilter from "../../Components/Utlity/SideFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utlity/Pagination";
import { useParams } from "react-router";
import ViewProductsCategoryHook from "../../Hook/Product/ViewProductsCategoryHook";

export default function ProductsByCategory() {
  const { id } = useParams();

  console.log(id);

  const [items, pagination, getPage] = ViewProductsCategoryHook(id);
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
