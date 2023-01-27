import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserFavoritesProducts from "../../Components/User/UserFavoritesProducts";
import UserSideBar from "../../Components/User/UserSideBar";

export default function UserFavoritesProductsPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row className="py-3">
            <Col sm="2" xs="2" md="3">
              <UserSideBar />
            </Col>

            <Col sm="10" xs="10" md="9">
              <UserFavoritesProducts />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
