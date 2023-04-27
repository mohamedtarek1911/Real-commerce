import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteReviewOnProduct } from "../../Redux/Actions/reviewAction";
import notify from "../UseNotfications";

export default function DeleteRateHook(itemReview) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  var user = "";

  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
    console.log(user._id);
  } else {
    user = "";
  }

  useEffect(() => {
    if (itemReview.user._id === user._id) {
      setIsUser(true);
    }
  }, []);

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReviewOnProduct(itemReview._id));
    handleClose();
    setLoading(false);
  };

  const res = useSelector((state) => state.reviewReducer.deleteReview);
  console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res === [] || res === "") {
        notify("تم حذف التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else notify("هناك مشكله فى عملية المسح", "error");
    }
  }, [res]);

  return [isUser, handelDelete, handleShow, handleClose, showDelete];
}