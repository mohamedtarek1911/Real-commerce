import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOredersItems from "./AdminAllOredersItems";
import ViewAllUserOrderHook from "../../Hook/User/ViewAllUserOrderHook";
import Pagination from "../Utlity/Pagination";

export default function AdminAllOrders() {
  const [userName, Result, Paginate, OrederData, onPress] =
    ViewAllUserOrderHook();
  return (
    <>
      <div>
        <div className="admin-content-text">ادارة جميع الطلبات</div>
        <Row className="justify-content-start">
          {OrederData.length >= 1 ? (
            OrederData.map((item, index) => {
              return <AdminAllOredersItems key={index} item={item} />;
            })
          ) : (
            <h6>لايوجد اي طلبات حتى الان</h6>
          )}
          {/* <AdminAllOredersItems /> */}

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
