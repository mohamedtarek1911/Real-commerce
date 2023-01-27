import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";

export default function UserAllOrders() {
  return (
    <>
      <div>
        <div className="admin-content-text pb-4">اهلا محمد على</div>
        <Row className="justify-content-between">
          <UserAllOrdersItem />
          <UserAllOrdersItem />
          <UserAllOrdersItem />
        </Row>
      </div>
    </>
  );
}
