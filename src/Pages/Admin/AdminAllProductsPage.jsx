import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utlity/Pagination";
import ViewProductAdminHook from "../../Hook/AdminHook/ViewProductAdminHook";
export default function AdminAllProductsPage() {
  const [items, pagination, getPage] = ViewProductAdminHook();
  if (items) {
    console.log(items);
  }
  if (pagination) {
    var pageCount = pagination;
    console.log(pagination);
  } else {
    pageCount = 0;
  }
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <Col md="3" xs="2" sm="2">
              <AdminSideBar />
            </Col>
            <Col md="9" xs="10" sm="10">
              <AdminAllProducts products={items} />
            </Col>
            {pageCount > 1 ? (
              <Pagination pageCount={pageCount} onPress={getPage} />
            ) : null}
          </Row>
        </Container>
      </div>
    </>
  );
}
