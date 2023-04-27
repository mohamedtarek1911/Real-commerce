import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginHook from "../../Hook/AuthHook/LoginHook";

export default function LoginPage() {
  const [
    Email,
    Pass,
    handleEmailEnter,
    handlePassEnter,
    sumbit,
    Loading,
    IsPress,
  ] = LoginHook();
  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <Container style={{ minHeight: "730px" }}>
          <Row className="py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
              <label className="mx-auto title-login">تسجيل الدخول</label>
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
              <button onClick={sumbit} className="btn-login mx-auto mt-4">
                تسجيل الدخول
              </button>
              <label className="mx-auto my-4">
                ليس لديك حساب ؟
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span style={{ cursor: "pointer" }} className="text-danger">
                    اضغط هنا
                  </span>
                </Link>
              </label>

              <label className="mx-auto my-4">
                <Link
                  to="/user/forgetpassword"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  هل نسيت كلمه السر
                </Link>
              </label>

              {IsPress === true ? (
                Loading === true ? (
                  <div className="text-center d-flex justify-content-center align-content-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                ) : null
              ) : null}
            </Col>

            {/* <label className="mx-auto my-4">
              <Link
                className="mx-2"
                to="/admin/allproducts"
                style={{ textDecoration: "none" }}
              >
                <span style={{ cursor: "pointer" }} className="text-danger ">
                  الدخول ادمن
                </span>
              </Link>

              <Link to="/user/allorders" style={{ textDecoration: "none" }}>
                <span
                  style={{ cursor: "pointer" }}
                  className="text-danger mx-3"
                >
                  الدخول مستخدم
                </span>
              </Link>
            </label> */}
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </>
  );
}
