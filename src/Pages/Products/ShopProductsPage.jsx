import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utlity/Pagination";
import SearchCountResult from "../../Components/Utlity/SearchCountResult";
import SideFilter from "../../Components/Utlity/SideFilter";
import ViewSearchProductHook from "../../Hook/Product/ViewSearchProductHook";

export default function ShopProductsPage() {
  const [items, pagination, getPage, getAllProducts, results] =
    ViewSearchProductHook();
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <CategoryHeader />
        <Container>
          <SearchCountResult
            onClick={getAllProducts}
            title={` هناك ${results} نتيجة بحث`}
          />
          <Row className="d-flex flex-row">
            <Col sm="3" xs="3" md="2" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="9" xs="9" md="10">
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
