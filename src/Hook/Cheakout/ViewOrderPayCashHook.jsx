import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAddress } from "../../Redux/Actions/addressAction";
import { useNavigate } from "react-router";
import GetAllUserCartHook from "../Cart/GetAllUserCartHook";
import notify from "../UseNotfications";
import { createOrderPayCash } from "../../Redux/Actions/checkoutAction";

export default function ViewOrderPayCashHook() {
  const [ID, setID] = useState("");
  const [LoadingData, setLoadingData] = useState(true);
  const [Loading, setLoading] = useState(true);

  const [AddressDetails, setAddressDetails] = useState([]);

  useEffect(() => {}, []);

  //   const res = useSelector();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [
    res,
    ,
    ItemsNum,
    CartItems,
    TotalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    CartID,
  ] = GetAllUserCartHook();

  console.log(CartID);

  const oneAddress = useSelector((state) => state.addressReducer.getOneAddress);

  const get = async (ID) => {
    setLoadingData(true);
    setAddressDetails([]);
    await dispatch(getOneAddress(ID));
    setLoadingData(false);
  };

  const handleChooseAddress = (e) => {
    console.log(e.target.value);
    if (e.target.value !== 0) {
      setID(e.target.value);
      get(e.target.value);
    }
  };

  useEffect(() => {
    if (LoadingData === false) {
      if (oneAddress && oneAddress.status === "success") {
        setAddressDetails(oneAddress.data);
      } else {
        setAddressDetails([]);
      }
    }
  }, [LoadingData]);

  const result = useSelector((state) => state.checkoutReducer.createOrderCash);

  console.log(result);

  const createOrderCash = async () => {
    if (CartID == "0") {
      notify("اضف منتجات الي العربة", "warn");
      return;
    }
    if (AddressDetails.length <= 0) {
      notify("من فضلك اختر عنوان ", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderPayCash(CartID, {
        shippingAddress: {
          details: AddressDetails.details,
          phone: AddressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (result && result.status === 201) {
        notify("تم انشاء طلبك بنجاح", "success");
        setTimeout(() => {
          window.location.href = "/user/allorders";
          // navigate("/user/allorders");
        }, 2500);
      } else {
        notify("فشل في عمليه الشراء", "error");
      }
    }
  }, [Loading]);

  return [handleChooseAddress, AddressDetails, createOrderCash];
}
