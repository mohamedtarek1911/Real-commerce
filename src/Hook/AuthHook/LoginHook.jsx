import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../UseNotfications";
import { loginUser } from "../../Redux/Actions/AuthAction";
export default function LoginHook() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [Loading, setLoading] = useState(true);
  const [IsPress, setIsPress] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleEmailEnter = (e) => {
    setEmail(e.target.value);
  };
  const handlePassEnter = (e) => {
    setPass(e.target.value);
  };

  const validationValues = () => {
    if (Email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    if (Pass === "") {
      notify("من فضلك ادخل كلمة السر ", "error");
      return;
    }

    if (!Email.match(mailformat)) {
      notify("من فضلك تاكيد من الايميل", "error");
      return;
    }
  };

  const sumbit = async (e) => {
    e.preventDefault();
    setIsPress(true);
    setLoading(false);
    validationValues();
    await dispatch(
      loginUser({
        email: Email,
        password: Pass,
      })
    );
    setLoading(true);
    setIsPress(false);
  };
  const res = useSelector((state) => state.authReducer.loginUser);
  useEffect(() => {
    if (Loading === false) {
      if (res !== []) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 5500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("كلمة السر او الايميل خطا", "error");
        }
        setLoading(true);
      }
    }
  }, [res]);

  return [
    Email,
    Pass,
    handleEmailEnter,
    handlePassEnter,
    sumbit,
    Loading,
    IsPress,
  ];
}
