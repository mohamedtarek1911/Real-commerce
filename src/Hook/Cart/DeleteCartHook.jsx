import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteCart,
  deleteOneFromCart,
  updateCartItem,
} from "../../Redux/Actions/cartAction";
import { useEffect } from "react";
import notify from "../UseNotfications";

export default function DeleteCartHook(item) {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const [LoadingData, setLoadingData] = useState(true);

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    if (item) setItemCount(item.count);
  }, []);

  const res = useSelector((state) => state.cartReducer.clearCart);

  const handleClearCart = async () => {
    setLoading(true);
    await dispatch(deleteCart());
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (res === "") {
        console.log(res);
        notify("تم حذف كل المنتجات بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
    }
  }, [Loading]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletePro = async () => {
    setLoadingData(true);
    await dispatch(deleteOneFromCart(item._id));
    handleClose();
    setLoadingData(false);
  };

  const resPro = useSelector((state) => state.cartReducer.deleteOneFromCert);

  console.log(resPro);

  useEffect(() => {
    if (LoadingData === false) {
      if (resPro && resPro.status === "success") {
        notify("تم حذف المنتج  بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
    }
  }, [LoadingData]);

  const onChangeCount = (e) => {
    setItemCount(e.target.value);
  };

  const handeleUpdateCart = async () => {
    await dispatch(
      updateCartItem(item._id, {
        count: itemCount,
      })
    );

    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  };

  return [
    handleClearCart,
    handleDeletePro,
    show,
    handleClose,
    handleShow,
    handeleUpdateCart,
    onChangeCount,
    itemCount,
  ];
}
