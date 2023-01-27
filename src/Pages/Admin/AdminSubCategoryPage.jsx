import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminSubCategory from "../../Components/Admin/AdminSubCategory";

export default function AdminSubCategoryPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <Col md="3" xs="2" sm="2">
              <AdminSideBar />
            </Col>
            <Col md="9" xs="10" sm="10">
              <AdminSubCategory />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
