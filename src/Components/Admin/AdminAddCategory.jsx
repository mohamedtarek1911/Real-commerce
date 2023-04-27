import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../Assets/images/avatar.png";
import { craeteCategory } from "../../Redux/Actions/CategoryAction";
import { ToastContainer, toast } from "react-toastify";
import notify from "../../Hook/UseNotfications";
import AddCategoryHook from "../../Hook/Category/AddCategoryHook";

export default function AdminAddCategory() {
  const [
    dispatch,
    Img,
    Name,
    loading,
    isPress,
    category,
    onImageChange,
    handelSubmit,
    onChangeName,
    avatar,
  ] = AddCategoryHook();

  return (
    <>
      <div>
        <Row className="justify-content-start ">
          <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
          <Col sm="8">
            <div className="text-form pb-2">صوره التصنيف</div>
            <div>
              <label for="upload-photo">
                <img
                  src={Img}
                  alt="fzx"
                  height="100px"
                  width="120px"
                  style={{ cursor: "pointer" }}
                />
              </label>
              <input
                type="file"
                name="photo"
                onChange={onImageChange}
                id="upload-photo"
              />
            </div>

            <input
              onChange={onChangeName}
              value={Name}
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="اسم التصنيف"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
              حفظ التعديلات
            </button>
          </Col>
        </Row>
        {isPress ? (
          loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <h4>تم الانتهاء</h4>
          )
        ) : null}
        <ToastContainer />
      </div>
    </>
  );
}
