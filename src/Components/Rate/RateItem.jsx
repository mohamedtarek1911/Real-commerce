import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../Assets/images/rate.png";
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from "react-toastify";
import deleteicon from "../../Assets/images/delete.png";
import editicon from "../../Assets/images/edit.png";
import DeleteRateHook from "../../Hook/Review/DeleteRateHook";
import EditRateHook from "../../Hook/Review/EditRateHook";
const RateItem = ({ itemReview }) => {
  console.log(itemReview);
  const { rating, review, user } = itemReview;

  const [isUser, handelDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(itemReview);
  const [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    OnChangeRateValue,
    newRateValue,
  ] = EditRateHook(itemReview);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      OnChangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انتا متاكد من حذف التقييم</div>
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

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل التقييم</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />
          <input
            onChange={onChangeRateText}
            value={newRateText}
            type="text"
            className="font w-100"
            style={{ border: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button className="font" variant="dark" onClick={handelEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rating}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{review}</div>
          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end">
              <img
                src={deleteicon}
                onClick={handleShow}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />

              <img
                src={editicon}
                onClick={handleShowEdit}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />
            </div>
          ) : null}
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default RateItem;
