import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserCart } from "../../Redux/Actions/cartAction";
import { useState } from "react";

export default function GetAllUserCartHook() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.cartReducer.getAllUserCart);

  console.log(res);
  const [Loading, setLoading] = useState(true);
  const [ItemsNum, setItemsNum] = useState(0);
  const [CartItems, setCartItems] = useState([]);
  const [TotalCartPrice, setTotalCartPrice] = useState(0);
  const [couponNameRes, setCouponName] = useState("");
  const [CartID, setCartID] = useState("0");

  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState(0);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserCart());
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (Loading === false) {
      if (res && res.status === "success") {
        setItemsNum(res.numOfCartItems);
        setCartItems(res.data.products);
        setTotalCartPrice(res.data.totalCartPrice);
        setCartID(res.data._id);
        console.log(res);
        if (res.data.coupon) {
          setCouponName(res.data.coupon);
        } else {
          setCouponName("");
        }
        if (res.data.totalAfterDiscount) {
          setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount);
        } else {
          setTotalCartPriceAfterDiscount("");
        }
      } else {
        setCouponName("");
        setTotalCartPriceAfterDiscount("");
        setItemsNum(0);
        setTotalCartPrice(0);
        setCartID("0");
      }
    }
  }, [Loading]);

  return [
    res,
    Loading,
    ItemsNum,
    CartItems,
    TotalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    CartID,
  ];
}
