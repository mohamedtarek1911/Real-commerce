import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";
import ViewAllUserOrderHook from "../../Hook/User/ViewAllUserOrderHook";
import Pagination from "../Utlity/Pagination";

export default function UserAllOrders() {
  const [userName, Result, Paginate, OrederData, onPress] =
    ViewAllUserOrderHook();
  return (
    <>
      <div>
        <div className="admin-content-text pb-4">اهلا...{userName}</div>
        <div className="admin-content-text pb-4">عدد الطلبات # {Result}</div>

        <Row className="justify-content-between">
          {OrederData.length >= 1 ? (
            OrederData.map((item, index) => {
              return <UserAllOrdersItem key={index} item={item} />;
            })
          ) : (
            <h6>لايوجد اي طلبات حتى الان</h6>
          )}

          {Paginate.numberOfPages >= 2 ? (
            <Pagination
              onPress={onPress}
              pageCount={Paginate.numberOfPages ? Paginate.numberOfPages : 0}
            />
          ) : null}
        </Row>
      </div>
    </>
  );
}
