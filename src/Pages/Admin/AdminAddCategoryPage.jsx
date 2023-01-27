import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddCategory from "../../Components/Admin/AdminAddCategory";
import AdminSideBar from "../../Components/Admin/AdminSideBar";

export default function AdminAddCategoryPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row className="py-3">
            <Col sm="2" xs="2" md="3">
              <AdminSideBar />
            </Col>

            <Col sm="10" xs="10" md="9">
              <AdminAddCategory />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
