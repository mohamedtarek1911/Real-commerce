import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { forgetPassword } from "../../Redux/Actions/AuthAction";
import notify from "../UseNotfications";

export default function ForgetPasswordHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const result = useSelector((state) => state.authReducer.forgetPassword);
  const [Email, setEmail] = useState("");
  const [Loading, setLoading] = useState(true);

  const handleEmailEnter = (e) => {
    localStorage.setItem("user-email", Email);
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const sumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (Email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    localStorage.setItem("user-email", Email);

    await dispatch(
      forgetPassword({
        email: Email,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (result) {
        console.log(result);
        if (result.data.status === "Success") {
          notify("تم ارسال الكود للايميل بنجاح", "success");
          setTimeout(() => {
            navigate("/user/verifypassword");
          }, 5500);
        }
        if (result.data.status === "fail") {
          notify("هذا الحساب غير موجود لدينا", "error");
        }
      }
    }
  }, [result, Loading]);

  return [Email, handleEmailEnter, sumbit];
}
