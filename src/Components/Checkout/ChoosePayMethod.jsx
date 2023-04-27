import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AllAddressHook from "../../Hook/User/AllAddressHook";
import ViewOrderPayCashHook from "../../Hook/Cheakout/ViewOrderPayCashHook";
import { ToastContainer } from "react-toastify";
import notify from "../../Hook/UseNotfications";
import OrderPayCardHook from "../../Hook/Cheakout/OrderPayCardHook";
import GetAllUserCartHook from "../../Hook/Cart/GetAllUserCartHook";

export default function ChoosePayMethod() {
  const [Type, setType] = useState("");
  const [Address] = AllAddressHook();
  const [handleChooseAddress, AddressDetails, createOrderCash] =
    ViewOrderPayCashHook();
  const [handleCreateOrderCard] = OrderPayCardHook(AddressDetails);
  const [
    res,
    Loading,
    ItemsNum,
    CartItems,
    TotalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    CartID,
  ] = GetAllUserCartHook();
  const changeMethod = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };
  const handlePay = () => {
    if (Type === "CARD") {
      console.log("order card");
      handleCreateOrderCard();
    } else if (Type === "CASH") {
      createOrderCash();
    } else {
      notify("من افضلك اختار طريقة الشراء", "warn");
    }
  };

  return (
    <>
      <div>
        <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
        <div className="user-address-card my-2 px-3">
          <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-2">
              <input
                onChange={changeMethod}
                style={{ cursor: "pointer" }}
                name="group"
                id="group1"
                type="radio"
                value="CARD"
                className="mt-2"
              />
              <label
                style={{ cursor: "pointer" }}
                className="mx-2"
                for="group1"
              >
                الدفع عن طريق البطاقه الائتمانية
              </label>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col xs="12" className="d-flex">
              <input
                style={{ cursor: "pointer" }}
                onChange={changeMethod}
                name="group"
                id="group2"
                type="radio"
                value="CASH"
                className="mt-2"
              />
              <label
                style={{ cursor: "pointer" }}
                className="mx-2"
                for="group2"
              >
                الدفع عند الاستلام
              </label>
            </Col>
          </Row>

          <Row>
            <Col xs="4">
              <select
                name="category"
                id="cat"
                className="select mt-3 px-2 "
                onChange={handleChooseAddress}
              >
                <option value="0">اختر عنوان للتوصيل</option>

                {Address ? (
                  Address.map((item, index) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.alias}
                      </option>
                    );
                  })
                ) : (
                  <option key={0} value={0}>
                    "لا يوجد عنوان"
                  </option>
                )}
              </select>
            </Col>
          </Row>
        </div>

        <Row>
          <Col xs="12" className="d-flex justify-content-end">
            <div className="product-price d-inline border">
              {totalCartPriceAfterDiscount >= 1
                ? `${TotalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} `
                : `${TotalCartPrice} جنيه`}
            </div>
            <div
              onClick={handlePay}
              className="product-cart-add px-3 pt-2 d-inline me-2"
            >
              اتمام الشراء
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </>
  );
}
