import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editAddress, getOneAddress } from "../../Redux/Actions/addressAction";
import notify from "../UseNotfications";

export default function EditAddressHook({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [NewHome, setNewHome] = useState("");
  const [NEWHomeDetails, setNEWHomeDetails] = useState("");
  const [NEWPhone, setNEWPhone] = useState("");
  const [LoadingData, setLoadingData] = useState(true);
  const [Loading, setLoading] = useState(true);

  const oneAddress = useSelector((state) => state.addressReducer.getOneAddress);

  console.log(oneAddress);
  console.log(id);
  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneAddress(id));
      setLoadingData(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (LoadingData === false) {
      if (oneAddress.data) {
        setNewHome(oneAddress.data.alias);
        setNEWHomeDetails(oneAddress.data.details);
        setNEWPhone(oneAddress.data.phone);
      }
    }
  }, [LoadingData]);

  const handaleEnterNewHome = (e) => {
    setNewHome(e.target.value);
  };
  const handaleEnterNewDetails = (e) => {
    setNEWHomeDetails(e.target.value);
  };
  const handaleEnterNewPhone = (e) => {
    setNEWPhone(e.target.value);
  };
  const onSumbit = async (e) => {
    e.preventDefault();
    if (NewHome === "" || NEWHomeDetails === "" || NEWPhone === "") {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      editAddress(id, {
        alias: NewHome,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.addressReducer.editAddress);

  useEffect(() => {
    if (Loading === false) {
      if (res && res.status === 200) {
        notify("تمت عملية التعديل بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 5500);
      } else {
        notify("فضل عملية التعديل ", "error");
      }
    }
  }, [Loading]);

  return [
    NewHome,
    NEWHomeDetails,
    NEWPhone,
    handaleEnterNewHome,
    handaleEnterNewDetails,
    handaleEnterNewPhone,
    onSumbit,
  ];
}
