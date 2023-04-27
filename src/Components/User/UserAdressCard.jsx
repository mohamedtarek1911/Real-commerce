import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../Assets/images/delete.png";
import { deleteAddress } from "../../Redux/Actions/addressAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function UserAdressCard({ item }) {
  const { alias, details, phone } = item;
  console.log(item);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const res = useSelector((state) => state.addressReducer.deleteAddress);

  console.log(res);

  const handelDelete = async () => {
    await dispatch(deleteAddress(item._id));
    setShow(false);

    window.location.reload(false);
  };
  return (
    <>
      <div className="user-address-card my-3 px-2">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <div className="font">تاكيد الحذف</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="font">هل انتا متاكد من عملية الحذف للعنوان</div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="font" variant="success" onClick={handleClose}>
              تراجع
            </Button>
            <Button className="font" variant="dark" onClick={handelDelete}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>

        <Row className="d-flex justify-content-between  ">
          <Col xs="1">
            <div className="p-2">{alias}</div>
          </Col>
          <Col xs="4" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
              <div className="d-flex mx-2">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={deleteicon}
                  height="17px"
                  width="15px"
                />
                <Link
                  to={`/user/edit-address/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <p className="item-delete-edit"> تعديل</p>
                </Link>
              </div>
              <div
                onClick={handleShow}
                style={{ cursor: "pointer" }}
                className="d-flex "
              >
                <img
                  style={{ cursor: "pointer" }}
                  alt=""
                  className="ms-1 mt-2"
                  src={deleteicon}
                  height="17px"
                  width="15px"
                />
                <p style={{ cursor: "pointer" }} className="item-delete-edit">
                  {" "}
                  ازاله
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "14px",
              }}
            >
              {details}
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
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
              {phone}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
