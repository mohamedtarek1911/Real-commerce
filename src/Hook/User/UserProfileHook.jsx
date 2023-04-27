import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserPassword,
  editUserProfile,
} from "../../Redux/Actions/userAction";
import notify from "../UseNotfications";
import { useNavigate } from "react-router";

export default function UserProfileHook() {
  console.log(JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const res = useSelector((state) => state.userReducer.editProfile);

  console.log(res);

  let user = [];
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [show, setShow] = useState(false);
  const [NewName, setNewName] = useState(user.name);
  const [NewPhone, setNewPhone] = useState(user.phone);
  const [NewEmail, setNewEmail] = useState(user.email);
  const [Loading, setLoading] = useState(true);

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewPhone = (e) => {
    setNewPhone(e.target.value);
  };
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      editUserProfile({
        name: NewName,
        phone: NewPhone,
      })
    );

    // window.location.reload(false);

    setLoading(false);
    handleClose();
  };

  useEffect(() => {
    if (Loading === false) {
      if (res && res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.data.user));

        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("فشل عملية التحديث", "error");
      }
    }
  }, [Loading]);

  //   change user password

  const [Password, setPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const [LoadingData, setLoadingData] = useState(true);

  const resData = useSelector((state) => state.userReducer.editPassword);

  const changePassword = async (e) => {
    if (NewPassword !== ConfirmNewPassword) {
      notify("كلمه السر الجديده غير متطابقه", "error");
    }
    e.preventDefault();
    setLoadingData(true);
    await dispatch(
      editUserPassword({
        currentPassword: Password,
        password: NewPassword,
        passwordConfirm: ConfirmNewPassword,
      })
    );
    setLoadingData(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  useEffect(() => {
    if (LoadingData === false) {
      if (resData && resData.status === 200) {
        localStorage.setItem("user", JSON.stringify(resData.data.data));

        notify("تمت  عملية التحديث", "success");

        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
          // navigate("/login");
          // window.location.reload(false);
        }, 1500);
      } else {
        notify("فشل عملية التحديث", "error");
      }
    }
  }, [LoadingData]);

  return [
    user,
    show,
    handleClose,
    handleShow,
    handleEdit,
    NewName,
    NewPhone,
    NewEmail,
    handleNewName,
    handleNewPhone,
    handleNewEmail,
    changePassword,
    Password,
    NewPassword,
    ConfirmNewPassword,
    handlePassword,
    handleNewPassword,
    handleConfirmPassword,
  ];
}
