import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { craeteReview } from "../../Redux/Actions/reviewAction";
import notify from "../UseNotfications";

export default function AddRateHook(id) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [RateText, setRateText] = useState("");
  const [RateValue, setRateValue] = useState(0);
  const [Loading, setLoading] = useState(true);

  const handleEnterRateText = (e) => {
    setRateText(e.target.value);
  };
  const handleEnterRateValue = (value) => {
    setRateValue(value);
  };

  var user = "";

  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
    console.log(user._id);
  } else {
    user = "";
  }

  const sumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (RateText == "" || RateValue == 0) {
      notify(" من فضلك ادخل تعليق  و تقييم", "error");
      return;
    }

    await dispatch(
      craeteReview(id, {
        review: RateText,
        rating: RateValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.reviewReducer.craeteReview);
  useEffect(() => {
    if (Loading === false) {
      if (res) {
        console.log(res);
        if (res.status && res.status === 403) {
          notify("غير مسموح للادمن بعمل تقييمات ", "error");
        } else if (res.status && res.status === 400) {
          notify("تم اضافة تعليق من قبل ", "error");
        } else if (res.status && res.status === 201) {
          notify("تم اضافه التقييم بنجاح", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 2000);
        }
      }
    }
  }, [res, Loading]);

  return [
    RateText,
    RateValue,
    handleEnterRateText,
    handleEnterRateValue,
    user,
    sumbit,
  ];
}
