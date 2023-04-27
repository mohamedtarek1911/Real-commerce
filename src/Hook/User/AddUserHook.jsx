import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../UseNotfications";
import { craeteNewAddress } from "../../Redux/Actions/addressAction";
import { useNavigate } from "react-router";

export default function AddUserHook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.addressReducer.newAddress);
  console.log(res);
  const [Home, setHome] = useState("");
  const [AddressDetails, setAddressDetails] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [Loading, setLoading] = useState(true);

  const handleEnterHome = (e) => {
    setHome(e.target.value);
  };
  const handleEnterAddressDetails = (e) => {
    setAddressDetails(e.target.value);
  };
  const handleEnterPhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };

  const sumbit = async (e) => {
    e.preventDefault();

    if (Home === "" || AddressDetails === "" || PhoneNum === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      craeteNewAddress({
        alias: Home,
        details: AddressDetails,
        phone: PhoneNum,
        city: "",
        postalCode: "",
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(res);
      if (res && res.status === 200) {
        notify("تمت اضافة العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 5500);
      } else {
        notify("هناك مشكله في الاضافة", "error");
      }
    }
  }, [Loading]);

  return [
    Home,
    AddressDetails,
    PhoneNum,
    handleEnterHome,
    handleEnterAddressDetails,
    handleEnterPhoneNum,
    sumbit,
  ];
}
