import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import GetAllUserCartHook from "../Cart/GetAllUserCartHook";
import notify from "../UseNotfications";
import { createOrderPayCard } from "../../Redux/Actions/checkoutAction";

export default function OrderPayCardHook(AddressDetails) {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.checkoutReducer.createOrderCard);
  const navigate = useNavigate();
  useEffect(() => {}, []);
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

  const handleCreateOrderCard = async () => {
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
      createOrderPayCard(CartID, {
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
      if (result && result.status === "success") {
        console.log(result.session);
        if (result.session.url) {
          window.open(result.session.url);
        }
        notify("تم انشاء طلبك بنجاح", "success");
      } else {
        notify("فشل في عمليه الشراء", "error");
      }
    }
  }, [Loading]);

  return [handleCreateOrderCard];
}
