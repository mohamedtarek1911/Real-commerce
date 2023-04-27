import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon } from "../../Redux/Actions/couponAction";

export default function CouponCardHook(coupon) {
  console.log(coupon);
  const dispatch = useDispatch();
  const dateString = coupon.expire;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    setShow(false);
    window.location.reload(false);
  };

  const res = useSelector((state) => state.couponReducer.deleteCoupon);
  console.log(res);

  return [formatDate, dateString, show, handleClose, handleShow, handelDelete];
}
