import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import deleteicon from "../../Assets/images/delete.png";
import mobile from "../../Assets/images/mobile.png";
import DeleteCartHook from "../../Hook/Cart/DeleteCartHook";

export default function CartItem({ item }) {
  console.log(item);

  const [
    handleClearCart,
    handleDeletePro,
    show,
    handleClose,
    handleShow,
    handeleUpdateCart,
    onChangeCount,
    itemCount,
  ] = DeleteCartHook(item);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">حذف المنتج </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من عمليه حذف المنتج من العربة</Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handleDeletePro}>
            تاكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img
          width="160px"
          height="197px"
          src={
            `http://127.0.0.1:8000/products/${item.product.imageCover}` ||
            mobile
          }
          alt=""
        />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                {item.product.category.name}
              </div>
              <div
                onClick={handleShow}
                className="d-flex pt-2 "
                style={{ cursor: "pointer" }}
              >
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {item.product.title}
              </div>
              <div className="d-inline pt-2 cat-rate me-2">
                {item.product.ratingsAverage || 0}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">
                {item.product.brand.name}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              {item.color === "" ? null : (
                <div
                  className="color ms-2 border"
                  style={{ backgroundColor: `${item.color}` }}
                ></div>
              )}
            </Col>
          </Row>

          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                  className="mx-2 "
                  value={itemCount}
                  onChange={onChangeCount}
                  type="number"
                  style={{ width: "60px", height: "40px" }}
                />

                <button
                  onClick={handeleUpdateCart}
                  className=" bg-dark px-2 btn btn-dark"
                >
                  تطبيق
                </button>
              </div>
              <div className="d-inline pt-2 barnd-text">{item.price} جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
}
