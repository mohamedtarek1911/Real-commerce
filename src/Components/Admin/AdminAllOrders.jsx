import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOredersItems from "./AdminAllOredersItems";

export default function AdminAllOrders() {
  return (
    <>
      <div>
        <div className="admin-content-text">ادارة جميع الطلبات</div>
        <Row className="justify-content-start">
          <AdminAllOredersItems />
          <AdminAllOredersItems />
          <AdminAllOredersItems />
          <AdminAllOredersItems />
          <AdminAllOredersItems />
          <AdminAllOredersItems />
        </Row>
      </div>
    </>
  );
}
