import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "../../Hook/AuthHook/VerifyPasswordHook";

export default function VerifyPasswordPage() {
  const [Code, handleEnterCode, submit] = VerifyPasswordHook();

  return (
    <>
      <Container style={{ minHeight: "690px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">
              ادخل الكود المرسل فى الايميل
            </label>
            <input
              value={Code}
              onChange={handleEnterCode}
              placeholder="ادخل الكود..."
              type="email"
              className="user-input my-3 text-center mx-auto"
            />

            <button onClick={submit} className="btn-login mx-auto mt-2">
              تاكيد
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
}
