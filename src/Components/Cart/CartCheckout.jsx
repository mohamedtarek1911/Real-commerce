import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DeleteCartHook from "../../Hook/Cart/DeleteCartHook";
import ApplyCouponHook from "../../Hook/Cart/ApplyCouponHook";
import notify from "../../Hook/UseNotfications";

export default function CartCheckout({
  TotalCartPrice,
  couponNameRes,
  totalCartPriceAfterDiscount,
  CartItems,
}) {
  const navigate = useNavigate();
  const [handleClearCart] = DeleteCartHook();
  const [CouponName, handleEnterCouponName, handleEnterCoupon, handleCheckout] =
    ApplyCouponHook(CartItems);

  useEffect(() => {
    if (couponNameRes) {
      handleEnterCouponName(couponNameRes);
    }
  }, [couponNameRes]);

  return (
    <>
      <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
        <Col xs="12" className="d-flex  flex-column  ">
          <div className="d-flex  ">
            <input
              value={CouponName}
              onChange={(e) => handleEnterCouponName(e.target.value)}
              className="copon-input d-inline text-center "
              placeholder="كود الخصم"
            />
            <button onClick={handleEnterCoupon} className="copon-btn d-inline ">
              تطبيق
            </button>
          </div>
          <div className="product-price d-inline w-100 my-3  border">
            {totalCartPriceAfterDiscount >= 1
              ? `${TotalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} `
              : `${TotalCartPrice} جنيه`}
          </div>
          <button
            onClick={handleCheckout}
            className="product-cart-add w-100 px-2 product-cart-add  d-inline "
          >
            اتمام الشراء
          </button>
          <button
            onClick={handleClearCart}
            className="product-cart-add w-100 px-2 my-3 bg-danger"
          >
            مسح العربة
          </button>
        </Col>
      </Row>
    </>
  );
}
