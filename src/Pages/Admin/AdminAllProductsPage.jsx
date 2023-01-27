import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utlity/Pagination";

export default function AdminAllProductsPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <Col md="3" xs="2" sm="2">
              <AdminSideBar />
            </Col>
            <Col md="9" xs="10" sm="10">
              <AdminAllProducts />
            </Col>
            <Pagination />
          </Row>
        </Container>
      </div>
    </>
  );
}
