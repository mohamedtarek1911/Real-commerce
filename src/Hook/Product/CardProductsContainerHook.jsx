import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductWishlist } from "../../Redux/Actions/wishlistAction";

export default function CardProductsContainerHook() {
  const [Loading, setLoading] = useState(true);
  const [FavProducts, setFavProducts] = useState([]);

  const dispatch = useDispatch();

  const res = useSelector((state) => state.wishlistReducer.allWishlist);

  useEffect(() => {
    setLoading(true);
    const run = async () => {
      await dispatch(getAllProductWishlist());
    };

    run();

    setLoading(false);
  }, []);

  useEffect(() => {
    if (Loading === false) {
      if (res) {
        console.log(res.data);
        setFavProducts(res.data.map((item) => item._id));
      }
    }
  }, [res]);

  return [FavProducts];
}
