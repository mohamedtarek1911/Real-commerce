import React, { useState } from "react";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import prod1 from "../../Assets/images/prod1.png";
import { deleteProducts } from "../../Redux/Actions/ProductAction";
export default function AdminAllProductsCard({ item }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteProducts(item._id));
    setShow(false);
    window.location.reload();
  };
  return (
    <>
      <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="font"> تاكيد الحذف</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل انت متاكد من عملية الحذف</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              تراجع
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              التاكيد
            </Button>
          </Modal.Footer>
        </Modal>
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "350px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Row className="d-flex justify-content-center px-2">
            <Col className=" d-flex justify-content-between">
              <div onClick={handleShow} className="d-inline item-delete-edit">
                ازاله
              </div>
              <Link
                to={`/admin/editproducts/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="d-inline item-delete-edit">تعديل</div>
              </Link>
            </Col>
          </Row>
          <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              src={item.imageCover}
            />
            <Card.Body>
              <Card.Title>
                <div className="card-title">{item.title} </div>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-between">
                  <div className="card-rate">{item.ratingsQuantity}</div>
                  <div className="d-flex">
                    <div className="card-currency mx-1">جنيه</div>
                    <div className="card-price">{item.price}</div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </>
  );
}
