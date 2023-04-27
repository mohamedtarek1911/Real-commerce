import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartAction";
import { useEffect } from "react";
import notify from "../UseNotfications";

export default function AddToCartHook(id, item) {
  const dispatch = useDispatch();
  const [SelectedIndex, setSelectedIndex] = useState("");
  const [SelecyedColor, setSelecyedColor] = useState("");
  const [Loading, setLoading] = useState(true);

  const selectingColor = (index, color) => {
    setSelectedIndex(index);
    setSelecyedColor(color);
  };
  console.log(SelectedIndex);
  console.log(SelecyedColor);

  const res = useSelector((state) => state.cartReducer.addToCart);

  console.log(res);

  const handleAddToCard = async (e) => {
    e.preventDefault();
    if (item) {
      if (item.availableColors.length !== 0 && SelecyedColor === "") {
        notify("من فضلك اختار اللون  ", "warn");
        return;
      }
    }

    // if (item.availableColors.length>=1) {
    //   if (SelecyedColor == "") {
    //     notify("من فضلك اختار اللون  ", "warn");
    //     return;
    //   }
    // }
    setLoading(true);
    await dispatch(addToCart({ productId: id, color: SelecyedColor }));

    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (res && res.status === 200) {
        notify("تمت اضافة المنتج  بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      } else {
        notify("هناك مشكلة في اضافة المنتج  ", "error");
      }
    }
  }, [Loading]);

  return [SelectedIndex, SelecyedColor, selectingColor, handleAddToCard];
}
