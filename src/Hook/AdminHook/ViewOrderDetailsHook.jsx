import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getOneOrder } from "../../Redux/Actions/orderAction";

export default function ViewOrderDetailsHook(id) {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.orderReducer.getOneOrder);
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const [Loading, setLoading] = useState(true);
  const [OrderData, setOrderData] = useState([]);
  const [CartItems, setCartItems] = useState([]);

  const get = async () => {
    setLoading(true);
    await dispatch(getOneOrder(id));
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (Loading === false) {
      if (res.data) {
        setOrderData(res.data);
      }
      if (res.data.cartItems) {
        setCartItems(res.data.cartItems);
      }
      console.log(res);
    }
  }, [Loading]);

  return [OrderData, CartItems];
}
