import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { craeteNewUser } from "../../Redux/Actions/AuthAction";
import notify from "../UseNotfications";
import { useNavigate } from "react-router-dom";
export default function SignUpHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Phone, setPhone] = useState("");
  const [Loading, setLoading] = useState(true);

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleNameEnter = (e) => {
    setName(e.target.value);
  };
  const handleEmailEnter = (e) => {
    setEmail(e.target.value);
  };
  const handlePassEnter = (e) => {
    setPass(e.target.value);
  };
  const handleConfirmPassEnter = (e) => {
    setConfirmPass(e.target.value);
  };
  const handlePhoneEnter = (e) => {
    setPhone(e.target.value);
  };

  const validationValues = () => {
    if (Name === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (Phone.length <= 10) {
      notify("من فضلك ادخل رقم هاتف صحيح", "error");
      return;
    }
    if (Pass != ConfirmPass) {
      notify("من فضلك تاكيد من كلمه السر", "error");
      return;
    }

    if (!Email.match(mailformat)) {
      notify("من فضلك تاكيد من الايميل", "error");
      return;
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    validationValues();
    setLoading(true);
    await dispatch(
      craeteNewUser({
        name: Name,
        email: Email,
        password: Pass,
        passwordConfirm: ConfirmPass,
        phone: Phone,
      })
    );
    setLoading(false);
  };
  let result = useSelector((state) => state.authReducer.createUsers);
  useEffect(() => {
    if (Loading === false) {
      if (result) {
        console.log(result);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          notify("تم تسجيل الحساب بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 5500);
        }
        if (result.data.errors) {
          if (result.data.errors[0].msg === "E-mail already in use")
            notify("هذا الايميل مسجل من قبل", "error");
        }
        if (result.data.errors) {
          if (result.data.errors[0].msg === "accept only egypt phone numbers")
            notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error");
        }

        if (result.data.errors) {
          if (result.data.errors[0].msg === "must be at least 6 chars")
            notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error");
        }
      }
    }
  }, [Loading]);

  return [
    Name,
    Email,
    Pass,
    ConfirmPass,
    Phone,
    handleNameEnter,
    handleEmailEnter,
    handlePassEnter,
    handleConfirmPassEnter,
    handlePhoneEnter,
    handleSumbit,
  ];
}
