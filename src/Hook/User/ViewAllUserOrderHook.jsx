import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllOrder } from "../../Redux/Actions/orderAction";

export default function ViewAllUserOrderHook() {
  const [Loading, setLoading] = useState(true);
  const [Result, setResult] = useState(0);
  const [Paginate, setPaginate] = useState({});
  const [OrederData, setOrederData] = useState([]);
  let limit = 3;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  let userName = "";
  if (user.name != null) {
    userName = user.name;
  }

  const res = useSelector((state) => state.orderReducer.allOrders);

  const get = async () => {
    setLoading(true);
    await dispatch(getAllOrder("", limit));
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, []);

  const onPress = async (page) => {
    setLoading(true);
    await dispatch(getAllOrder(page, limit));
    setLoading(false);
  };

  useEffect(() => {
    if (Loading === false) {
      if (res.results) {
        setResult(res.results);
      }
      if (res.paginationResult) {
        setPaginate(res.paginationResult);
      }
      if (res.data) {
        setOrederData(res.data);
      }
      console.log(res);
    }
  }, [Loading]);

  return [userName, Result, Paginate, OrederData, onPress];
}
