import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReviewOnProduct } from "../../Redux/Actions/reviewAction";
import notify from "../UseNotfications";

export default function EditRateHook(itemReview) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [newRateText, setNewRateText] = useState(itemReview.review);
  const [newRateValue, setNewRateValue] = useState(itemReview.rating);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setNewRateText(e.target.value);
  };
  const OnChangeRateValue = (val) => {
    setNewRateValue(val);
  };

  const handelEdit = async () => {
    setLoading(true);
    await dispatch(
      updateReviewOnProduct(itemReview._id, {
        review: newRateText,
        rating: newRateValue,
      })
    );
    handleCloseEdit();
    setLoading(false);
  };

  const res = useSelector((state) => state.reviewReducer.updateReview);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status && res.status === 200) {
        notify("تم تعديل التقييم بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      } else {
        notify("هناك مشكله فى عملية التعديل", "error");
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    }
  }, [loading]);

  return [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    onChangeRateText,
    newRateText,
    OnChangeRateValue,
    newRateValue,
  ];
}
