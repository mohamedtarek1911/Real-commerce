import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../Assets/images/avatar.png";
import { craeteBrand } from "../../Redux/Actions/brandAction";
import { craeteCategory } from "../../Redux/Actions/CategoryAction";
import notify from "../UseNotfications";

export default function AddBrandHook() {
  const dispatch = useDispatch();
  const [Img, setImg] = useState(avatar);
  const [SelectedFile, setSelectedFile] = useState(null);
  const [Name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  let brand = useSelector((state) => state.allBrand.brand);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (Name === "" || SelectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");

      return;
    }
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("image", SelectedFile);
    setLoading(true);
    await dispatch(craeteBrand(formData));
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setName("");
      setImg(avatar);
      setSelectedFile(null);
      setLoading(true);

      if (brand.status === 201) {
        notify("تمت الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله في عملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    dispatch,
    Img,
    Name,
    loading,
    isPress,
    brand,
    onImageChange,
    handelSubmit,
    onChangeName,
    avatar,
  ];
}
