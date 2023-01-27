import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminOrderDetalis from "../../Components/Admin/AdminOrderDetails";
export default function AdminOrderDetailsPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "730px" }}>
        <Container>
          <Row className="py-3">
            <Col sm="2" xs="2" md="3">
              <AdminSideBar />
            </Col>

            <Col sm="2" xs="10" md="9">
              <AdminOrderDetalis />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
