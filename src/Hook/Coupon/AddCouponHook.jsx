import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  craeteNewCoupon,
  getAllCoupon,
} from "../../Redux/Actions/couponAction";
import notify from "../UseNotfications";

export default function AddCouponHook() {
  const [coupnName, setcoupnName] = useState("");
  const [couponDate, setcouponDate] = useState("");
  const [couponValue, setcouponValue] = useState("");
  const [Loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setcoupnName(e.target.value);
  };

  const onChangeDate = (e) => {
    setcouponDate(e.target.value);
  };

  const onChangeValue = (e) => {
    setcouponValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (coupnName === "" || couponDate === "" || couponValue <= 0) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      craeteNewCoupon({
        name: coupnName,
        expire: couponDate,
        discount: couponValue,
      })
    );

    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.newCoupon);

  useEffect(() => {
    if (Loading === false) {
      console.log(res);
      if (res && res.status === 201) {
        notify("تمت اضافة الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
          window.location.href = "/admin/addcoupon";
        }, 5500);
      } else if (res && res.status === 400) {
        notify("هذا الكوبون موجود من قبل ", "error");
      } else if (res && res.status === 403) {
        notify("انتا غير مسموح لك بالاضافة", "error");
      }
    }
  }, [Loading]);

  const allCoupon = useSelector((state) => state.couponReducer.allCoupon);

  let coupons = [];

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };
    get();
  }, []);

  try {
    if (allCoupon && allCoupon.data.length >= 1) {
      coupons = allCoupon.data;
    }
  } catch (e) {}

  return [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
  ];
}
