import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserAllAdress from "../../Components/User/UserAllAdress";
import UserSideBar from "../../Components/User/UserSideBar";

export default function UserAllAdressesPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row className="py-3">
            <Col sm="2" xs="2" md="3">
              <UserSideBar />
            </Col>

            <Col sm="10" xs="10" md="9">
              <UserAllAdress />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
