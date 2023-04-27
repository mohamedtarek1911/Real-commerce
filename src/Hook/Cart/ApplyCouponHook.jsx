import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotfications";
import { applyCoupon } from "../../Redux/Actions/cartAction";
import { useNavigate } from "react-router";

export default function ApplyCouponHook(CartItems) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const res = useSelector((state) => state.cartReducer.applyCoupon);

  const [CouponName, setCouponName] = useState("");
  const [Loading, setLoading] = useState(true);

  const handleEnterCouponName = (e) => {
    setCouponName(e);
  };

  const handleEnterCoupon = async () => {
    if (CouponName === "") {
      notify("من فضلك ادخل اسم الكوبون صحيحا", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      applyCoupon({
        couponName: CouponName,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (res) {
        notify("تم اضافه الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        notify("هذا الكوبون غير صحيح او منتهي الصلاحيه", "warn");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
    }
  }, [Loading]);

  const handleCheckout = () => {
    if (CartItems.length >= 1) {
      navigate("/order/paymethod");
    } else {
      notify("من فضلك اضف منتجات اولا", "warn");
    }
  };

  return [CouponName, handleEnterCouponName, handleEnterCoupon, handleCheckout];
}
