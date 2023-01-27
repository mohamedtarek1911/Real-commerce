import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utlity/Pagination";
import SearchCountResult from "../../Components/Utlity/SearchCountResult";
import SideFilter from "../../Components/Utlity/SideFilter";

export default function ShopProductsPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <CategoryHeader />
        <Container>
          <SearchCountResult title={"450 نتيجه بحث"} />
          <Row className="d-flex flex-row">
            <Col sm="3" xs="3" md="2" className="d-flex">
              {" "}
              <SideFilter />
            </Col>
            <Col sm="9" xs="9" md="10">
              <CardProductsContainer title={""} btntitle={""} />
            </Col>
          </Row>
          <Pagination />
        </Container>
      </div>
    </>
  );
}
