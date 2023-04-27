import React from "react";
import { Col, Row } from "react-bootstrap";
import UserAllOrdersCard from "./UserAllOrdersCard";

export default function UserAllOrdersItem({ item }) {
  return (
    <>
      <div className="user-order mt-2">
        <Row>
          <div className="py-2 order-title">طلب رقم # {item.id || 0}</div>
        </Row>
        {item.cartItems
          ? item.cartItems.map((item, index) => {
              return <UserAllOrdersCard item={item} key={index} />;
            })
          : null}
        <Row className="d-flex justify-content-between">
          <Col xs="6" className="d-flex">
            <div>
              <div className="d-inline"> التوصيل </div>
              <div className="d-inline mx-2 stat">
                {item.isDelivered === true ? "تم التوصيل" : "قيد التنفيذ"}
              </div>
            </div>
            <div>
              <div className="d-inline"> الدفع </div>
              <div className="d-inline mx-2 stat">
                {item.isPaid === true ? "تم الدفع" : "قيد التنفيذ"}
              </div>
            </div>
            <div>
              <div className="d-inline"> طريقة الدفع </div>
              <div className="d-inline mx-2 stat">
                {item.paymentMethodType === "cash" ? "كاش" : "فيزا"}
              </div>
            </div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div>
              <div className="barnd-text">{item.totalOrderPrice || 0} جنيه</div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
