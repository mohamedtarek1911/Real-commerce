import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import RestPasswordHook from "../../Hook/AuthHook/RestPasswordHook";

export default function RestPasswordPage() {
  const [
    Password,
    handleEnterPassword,
    confirmPassword,
    handleEnterConfirmPassword,
    submit,
  ] = RestPasswordHook();
  return (
    <>
      <Container style={{ minHeight: "690px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">
              ادخل كلمه السر الجديده
            </label>
            <input
              value={Password}
              onChange={handleEnterPassword}
              placeholder="ادخل كلمه السر الجديدة"
              type="password"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              value={confirmPassword}
              onChange={handleEnterConfirmPassword}
              placeholder="تاكيد كلمه السر الجديدة"
              type="password"
              className="user-input my-3 text-center mx-auto"
            />

            <button onClick={submit} className="btn-login mx-auto mt-2">
              حفظ
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}
