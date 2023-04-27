import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignUpHook from "../../Hook/AuthHook/SignUpHook";

export default function RegisterPage() {
  const [
    Name,
    Email,
    Pass,
    ConfirmPass,
    Phone,
    handleNameEnter,
    handleEmailEnter,
    handlePassEnter,
    handleConfirmPassEnter,
    handlePhoneEnter,
    handleSumbit,
  ] = SignUpHook();

  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container style={{ minHeight: "730px" }}>
          <Row className="py-5 d-flex justify-content-center hieght-search">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">تسجيل حساب جديد</label>
              <input
                value={Name}
                onChange={handleNameEnter}
                placeholder="اسم المستخدم..."
                type="text"
                className="user-input  mt-3 text-center mx-auto"
              />
              <input
                value={Email}
                onChange={handleEmailEnter}
                placeholder="الايميل..."
                type="email"
                className="user-input my-3 text-center mx-auto"
              />
              <input
                value={Pass}
                onChange={handlePassEnter}
                placeholder="كلمه السر..."
                type="password"
                className="user-input text-center mx-auto"
              />
              <input
                value={ConfirmPass}
                onChange={handleConfirmPassEnter}
                placeholder="تاكيد كلمه السر..."
                type="password"
                className="user-input text-center mt-3 mx-auto"
              />
              <input
                value={Phone}
                onChange={handlePhoneEnter}
                placeholder="الهاتف..."
                type="phone"
                maxLength={11}
                className="user-input  text-center mt-3 mx-auto"
              />
              <button onClick={handleSumbit} className="btn-login mx-auto mt-4">
                تسجيل الحساب
              </button>
              <label className="mx-auto my-4">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    اضغط هنا
                  </span>
                </Link>
              </label>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </>
  );
}
