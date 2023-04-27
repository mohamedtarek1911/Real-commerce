import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../Assets/images/mobile.png";
export default function AdminAllOredersItems({ item }) {
  console.log(item);
  return (
    <>
      <Col sm="12">
        <Link
          to={`/admin/orders/${item._id}`}
          className="cart-item-body my-2 px-1 d-flex"
          style={{ textDecoration: "none" }}
        >
          <div className="w-100">
            <Row className="justify-content-between">
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">
                  طلب رقم # {item.id}
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-2">
              <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                  طلب من.. {item.user.name || ""}
                </div>
                <div
                  style={{ color: "black" }}
                  className="d-inline pt-2 cat-rate me-2"
                >
                  {item.user.email || ""}
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col sm="12" className=" d-flex">
                <div className="mt-2  cat-text d-inline">الماركة :</div>
                <div className="mt-1 barnd-text d-inline mx-1">ابل </div>
                <div
                  className="color  me-1 border"
                  style={{ backgroundColor: "#E52C2C" }}
                ></div>
              </Col>
            </Row> */}

            <Row className="justify-content-between ">
              <Col sm="12" className=" d-flex flex-row justify-content-between">
                {/* <div className="d-inline pt-2 d-flex">
                  <div className="cat-text pt-1 d-inline">الكميه</div>
                  <input
                    className="mx-2 mt-1"
                    type="number"
                    style={{ width: "40px", height: "25px" }}
                  />
                </div> */}
                {/* <div className="d-inline pt-2 barnd-text">٣٠٠٠ جنية</div> */}
              </Col>
              <Col xs="6" className="d-flex mt-4">
                <div>
                  <div style={{ color: "black" }} className="d-inline">
                    {" "}
                    التوصيل
                  </div>
                  <div className="d-inline mx-2 stat">
                    {item.isDelivered === true ? "تم التوصيل" : "لم يتم "}
                  </div>
                </div>
                <div>
                  <div style={{ color: "black" }} className="d-inline">
                    {" "}
                    الدفع
                  </div>
                  <div className="d-inline mx-2 stat">
                    {item.isPaid === true ? "تم الدفع" : "لم يتم "}
                  </div>
                </div>

                <div>
                  <div style={{ color: "black" }} className="d-inline">
                    طرقة الدفع
                  </div>
                  <div className="d-inline mx-2 stat">
                    {item.paymentMethodType === "cash"
                      ? "كاش"
                      : "بطاقة ائتمانية"}
                  </div>
                </div>
              </Col>
              <Col xs="6" className="d-flex justify-content-end mt-4">
                <div>
                  <div className="barnd-text">
                    {item.totalOrderPrice || 0} جنية
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Link>
      </Col>
    </>
  );
}
