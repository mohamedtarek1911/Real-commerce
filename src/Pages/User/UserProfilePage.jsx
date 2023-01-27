import React from "react";
import UserProfile from "../../Components/User/UserProfile";
import UserSideBar from "../../Components/User/UserSideBar";
import { Container, Row, Col } from "react-bootstrap";

export default function UserProfilePage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row className="py-3">
            <Col sm="2" xs="2" md="3">
              <UserSideBar />
            </Col>

            <Col sm="10" xs="10" md="9">
              <UserProfile />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
