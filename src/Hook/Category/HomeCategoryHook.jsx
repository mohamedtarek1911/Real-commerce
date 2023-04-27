import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";

export default function HomeCategoryHook() {
  let dispatch = useDispatch();
  let category = useSelector((state) => state.allCategory.category);
  let loading = useSelector((state) => state.allCategory.loading);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
    };
    get();
  }, []);

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return [colors, category, loading];
}
