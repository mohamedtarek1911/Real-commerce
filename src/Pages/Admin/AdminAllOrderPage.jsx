import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utlity/Pagination";

export default function AdminAllOrderPage() {
  return (
    <>
      <div className="mt-2" style={{ minHeight: "0px" }}>
        <Container>
          <Row>
            <Col md="3" xs="2" sm="2">
              <AdminSideBar />
            </Col>
            <Col md="9" xs="10" sm="10">
              <AdminAllOrders />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
