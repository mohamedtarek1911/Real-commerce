import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartCheckout from "../../Components/Cart/CartCheckout";
import CartItem from "../../Components/Cart/CartItem";
import GetAllUserCartHook from "../../Hook/Cart/GetAllUserCartHook";
import { ToastContainer } from "react-toastify";

export default function CartPage() {
  const [
    res,
    Loading,
    ItemsNum,
    CartItems,
    TotalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();

  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container>
          <Row>
            <div className="cart-title my-4">عربة التسوق</div>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs="12" md="9">
              {CartItems.length >= 1 ? (
                CartItems.map((item, index) => {
                  return <CartItem key={index} item={item} />;
                })
              ) : (
                <h6>لا يوجد منتجات في العربة</h6>
              )}
            </Col>
            <Col xs="6" md="3">
              <CartCheckout
                couponNameRes={couponNameRes}
                TotalCartPrice={TotalCartPrice}
                totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
                CartItems={CartItems}
              />
            </Col>
          </Row>
        </Container>

        <ToastContainer />
      </div>
    </>
  );
}
