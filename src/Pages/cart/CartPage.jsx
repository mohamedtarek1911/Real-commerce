import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";

export default function CartPage() {
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <div className="cart-title my-4">عربة التسوق</div>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" md="9">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </Col>
            <Col xs="6" md="3">
              <CartCheckout />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
