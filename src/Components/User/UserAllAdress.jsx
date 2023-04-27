import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAdressCard from "./UserAdressCard";
import AllAddressHook from "../../Hook/User/AllAddressHook";

export default function UserAllAdress() {
  const [Address] = AllAddressHook();
  console.log(Address);
  return (
    <>
      <div>
        <div className="admin-content-text pb-4">دفتر العنوانين</div>

        {Address ? (
          Address.map((item, index) => {
            return <UserAdressCard key={index} item={item} />;
          })
        ) : (
          <h5>لا يوجد عنوانين </h5>
        )}

        <Row className="justify-content-center">
          <Col sm="5" className="d-flex justify-content-center">
            <Link to="/user/add-address" style={{ textDecoration: "none" }}>
              <button className="btn-add-address">اضافه عنوان جديد</button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
