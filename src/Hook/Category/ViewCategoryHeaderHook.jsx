import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryHeader,
} from "../../Redux/Actions/CategoryAction";

export default function ViewCategoryHeaderHook() {
  let dispatch = useDispatch();
  let allCategory = useSelector((state) => state.allCategory.categoryHeader);

  const [Loading, setLoading] = useState(true);

  const get = async () => {
    setLoading(true);
    await dispatch(getAllCategoryHeader());
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, []);

  console.log(allCategory);
  return [allCategory];
}
