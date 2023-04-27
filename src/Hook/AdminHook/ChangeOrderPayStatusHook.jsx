import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  changeOrderDeliver,
  changeOrderPay,
} from "../../Redux/Actions/orderAction";
import notify from "../UseNotfications";

export default function ChangeOrderPayStatusHook(id) {
  const [Loading, setLoading] = useState(true);
  const [LoadingData, setLoadingData] = useState(true);

  const [Pay, setPay] = useState(0);
  const [Deliver, setDeliver] = useState(0);

  const dispatch = useDispatch();
  const resPay = useSelector((state) => state.orderReducer.changePay);
  const resDeliver = useSelector((state) => state.orderReducer.changeDeliver);

  const navigate = useNavigate();

  const handleChoosePaid = (e) => {
    setPay(e.target.value);
  };

  const handleEnterPay = async () => {
    if (Pay == "true") {
      setLoading(true);
      await dispatch(changeOrderPay(id));
      setLoading(false);
    } else if (Pay === "0") {
      notify("من فضلك اختر حالة الدفع ", "warn");
    }
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(resPay);
      if (resPay && resPay.status === 200) {
        notify("تم التغير حالة الدفع بنجاح ", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2500);
      }
    }
  }, [Loading]);

  const handleChangeDeliver = (e) => {
    setDeliver(e.target.value);
  };

  const handleEnterDeliver = async () => {
    if (Deliver == "true") {
      setLoadingData(true);
      await dispatch(changeOrderDeliver(id));
      setLoadingData(false);
    } else if (Deliver === "0") {
      notify("من فضلك اختر حالة الدفع ", "warn");
    }
  };

  useEffect(() => {
    if (LoadingData === false) {
      console.log(resDeliver);
      if (resDeliver && resDeliver.status === 200) {
        notify("تم التغير حالة االتوصيل  بنجاح ", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2500);
      }
    }
  }, [LoadingData]);

  return [
    handleChoosePaid,
    Pay,
    handleEnterPay,
    handleChangeDeliver,
    handleEnterDeliver,
    Deliver,
  ];
}
