import React from "react";
import { Col, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import { useParams } from "react-router";
import ViewOrderDetailsHook from "../../Hook/AdminHook/ViewOrderDetailsHook";
import UserAllOrdersItem from "../User/UserAllOrdersItem";
import AdminAllOredersItems from "./AdminAllOredersItems";
import ChangeOrderPayStatusHook from "../../Hook/AdminHook/ChangeOrderPayStatusHook";
import { ToastContainer } from "react-toastify";

export default function AdminOrderDetails() {
  const { id } = useParams();

  const [OrderData, CartItems] = ViewOrderDetailsHook(id);

  const [
    handleChoosePaid,
    Pay,
    handleEnterPay,
    handleChangeDeliver,
    handleEnterDeliver,
    Deliver,
  ] = ChangeOrderPayStatusHook(id);

  return (
    <>
      {/* <CartItem item={item} />
      <CartItem item={item} />
      <CartItem item={item} /> */}

      <UserAllOrdersItem item={OrderData} />
      <Row className="justify-content-center mt-4 user-data">
        <div className="admin-content-text py-2">
          تفاصيل الطلب رقم #{OrderData.id}
        </div>

        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {OrderData.user ? OrderData.user.name : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {OrderData.user ? OrderData.user.phone : ""}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الايميل:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {OrderData.user ? OrderData.user.email : ""}
          </div>
        </Col>

        <div className="d-flex mt-2 justify-content-center">
          <div>
            <select
              name="pay"
              id="paid"
              className="select input-form-area mt-1  text-center px-2 width-50"
              onChange={handleChoosePaid}
            >
              <option value="0">حالة الدفع</option>
              <option value="true">تم الدفع</option>
              <option value="false">لم يتم الدفع</option>
            </select>
            <button
              onClick={handleEnterPay}
              className="btn-a px-3 d-inline mx-2 "
            >
              حفظ
            </button>
          </div>
          <div>
            <select
              name="deliver"
              id="deliverd"
              className="select input-form-area mt-1  text-center px-2  width-50"
              onChange={handleChangeDeliver}
            >
              <option value="0">حالة التوصيل</option>
              <option value="true">تم التوصيل</option>
              <option value="false">لم يتم </option>
            </select>
            <button
              onClick={handleEnterDeliver}
              className="btn-a px-3 d-inline mx-2 "
            >
              حفظ
            </button>
          </div>
        </div>
        <ToastContainer />
      </Row>
    </>
  );
}
