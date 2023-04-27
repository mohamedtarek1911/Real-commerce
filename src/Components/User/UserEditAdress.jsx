import React from "react";
import { Col, Row } from "react-bootstrap";
import EditAddressHook from "../../Hook/User/EditAddressHook";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";

export default function UserEditAdress() {
  const id = useParams();
  console.log(id);
  const [
    NewHome,
    NEWHomeDetails,
    NEWPhone,
    handaleEnterNewHome,
    handaleEnterNewDetails,
    handaleEnterNewPhone,
    onSumbit,
  ] = EditAddressHook(id);
  return (
    <>
      <div>
        <Row className="justify-content-start ">
          <div className="admin-content-text pb-2">تعديل العنوان </div>
          <Col sm="8">
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              value={NewHome}
              onChange={handaleEnterNewHome}
              placeholder="تسمية العنوان مثلا(المنزل - العمل)"
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              value={NEWHomeDetails}
              onChange={handaleEnterNewDetails}
              placeholder="العنوان بالتفصيل"
            />
            <input
              type="text"
              value={NEWPhone}
              onChange={handaleEnterNewPhone}
              className="input-form d-block mt-3 px-3"
              placeholder="رقم الهاتف"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={onSumbit} className="btn-save d-inline mt-2 ">
              حفظ تعديل العنوان
            </button>
          </Col>
        </Row>
      </div>

      <ToastContainer />
    </>
  );
}
