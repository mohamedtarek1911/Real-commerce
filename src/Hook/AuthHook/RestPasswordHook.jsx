import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { restPassword } from "../../Redux/Actions/AuthAction";
import notify from "../UseNotfications";

export default function RestPasswordHook() {
  const distpatch = useDispatch();
  const navigate = useNavigate();

  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Loading, setLoading] = useState(true);

  const handleEnterPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEnterConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const result = useSelector((state) => state.authReducer.restPassword);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (Password === "") {
      notify("من فضلك ادخل كلمة السر", "error");
      return;
    }
    if (Password != confirmPassword) {
      notify("كلمة السر غير متطابقه مع تاكيد كلمع السر", "error");
      return;
    }

    await distpatch(
      restPassword({
        email: localStorage.getItem("user-email"),
        newPassword: Password,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (result) {
        console.log(result);
        if (result.data.status === "Success") {
          notify("تم تغير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        if (result.data.status === "fail") {
          notify("من فضلك اطلب كود جديد", "error");
        }
      }
    }
  }, [result]);

  return [
    Password,
    handleEnterPassword,
    confirmPassword,
    handleEnterConfirmPassword,
    submit,
  ];
}
