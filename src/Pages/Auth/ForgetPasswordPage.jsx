import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../Hook/AuthHook/ForgetPasswordHook";

export default function ForgetPasswordPage() {
  const [Email, handleEmailEnter, sumbit] = ForgetPasswordHook();
  return (
    <>
      <Container style={{ minHeight: "690px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">نسيت كلمة السر</label>
            <input
              value={Email}
              onChange={handleEmailEnter}
              placeholder="ادخل الايميل..."
              type="email"
              className="user-input my-3 text-center mx-auto"
            />

            <button onClick={sumbit} className="btn-login mx-auto mt-2">
              ارسال الكود
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}
