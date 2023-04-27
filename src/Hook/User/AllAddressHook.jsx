import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddress } from "../../Redux/Actions/addressAction";

export default function AllAddressHook() {
  let Address = [];
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllAddress());
    };

    get();
  }, []);

  const allAddress = useSelector((state) => state.addressReducer.allAddress);

  try {
    if (allAddress && allAddress.data.length >= 1) {
      Address = allAddress.data;
    }
  } catch (e) {}

  return [Address];
}
