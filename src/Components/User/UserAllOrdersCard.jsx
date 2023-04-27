import React from "react";
import { Col, Row } from "react-bootstrap";
import mobile from "../../Assets/images/mobile.png";
import { Link } from "react-router-dom";
export default function UserAllOrdersCard({ item }) {
  console.log(item);

  return (
    <>
      <div>
        <Row className="d-flex mb-2">
          <Col xs="3" md="2" className="d-flex justify-content-start">
            <Link
              to={`/ProductsDetails/${item.product._id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                width="93px"
                height="120px"
                src={
                  `http://127.0.0.1:8000/products/${item.product.imageCover}` ||
                  mobile
                }
                alt=""
              />
            </Link>
          </Col>
          <Col xs="8" md="6">
            <div className="d-inline pt-2 cat-title">
              {item.product.title || ""}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item.product.ratingsAverage ? item.product.ratingsAverage : 0}
            </div>
            <div className="rate-count d-inline p-1 pt-2">
              ({item.product.ratingsQuantity ? item.product.ratingsQuantity : 0}
              تقييم)
            </div>
            <div className="mt-3">
              <div className="cat-text  d-inline">الكميه</div>
              <input
                value={item.count || ""}
                className="mx-2 "
                type="number"
                style={{ width: "40px", height: "25px" }}
              />
            </div>
            <div
              className="color  d-inline"
              style={{ backgroundColor: item.color ? item.color : "red" }}
            ></div>
          </Col>
        </Row>
      </div>
    </>
  );
}
