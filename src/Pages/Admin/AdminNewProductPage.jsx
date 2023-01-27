import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminNewProduct from "../../Components/Admin/AdminNewProduct";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

export default function AdminNewProductPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <Col md="3" xs="2" sm="2">
              <AdminSideBar />
            </Col>
            <Col md="9" xs="10" sm="10">
              <AdminNewProduct />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
