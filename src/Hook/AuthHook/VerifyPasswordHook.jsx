import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { verifyPassword } from "../../Redux/Actions/AuthAction";
import notify from "../UseNotfications";

export default function VerifyPasswordHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Code, setCode] = useState("");
  const [Loading, setLoading] = useState(true);

  const handleEnterCode = (e) => {
    setCode(e.target.value);
  };

  const submit = async () => {
    if (Code === "") {
      notify("من فضلك ادخل الكود", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      verifyPassword({
        resetCode: Code,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (Loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("كود التفعيل صحيح", "success");
          setTimeout(() => {
            navigate("/user/reset-password");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("الكود خاطئ او انتهت صلاحيته", "error");
        }
      }
    }
  }, [res, Loading]);

  return [Code, handleEnterCode, submit];
}
