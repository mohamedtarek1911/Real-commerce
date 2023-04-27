import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishlist,
  removeProductToWishlist,
} from "../../Redux/Actions/wishlistAction";
import notify from "../UseNotfications";
import favoff from "../../Assets/images/fav-off.png";
import favon from "../../Assets/images/fav-on.png";

export default function WishlistProductsHook(item, FavProducts) {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  const [LoadingAdd, setLoadingAdd] = useState(true);
  const [LoadingRemove, setLoadingRemove] = useState(true);
  let Fav = FavProducts.some((ele) => ele === item._id);
  const [isFav, setIsFav] = useState(Fav);

  useEffect(() => {
    setIsFav(FavProducts.some((ele) => ele === item._id));
  }, [FavProducts]);

  const handleFav = () => {
    if (isFav) {
      romoveFromWishlist();
    } else {
      addToWishlist();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  const resAdd = useSelector((state) => state.wishlistReducer.addToWishlist);
  const resRemove = useSelector(
    (state) => state.wishlistReducer.removeFromWishlist
  );

  const addToWishlist = async () => {
    setIsFav(true);
    setFavImg(favon);
    setLoadingAdd(true);
    await dispatch(
      addProductToWishlist({
        productId: item._id,
      })
    );

    setLoadingAdd(false);
  };

  const romoveFromWishlist = async () => {
    setIsFav(false);
    setFavImg(favoff);
    setLoadingRemove(true);
    await dispatch(removeProductToWishlist(item._id));
    setLoadingRemove(false);
  };
  console.log(resAdd);
  console.log(resRemove);

  useEffect(() => {
    if (LoadingAdd === false) {
      if (resAdd && resAdd.status === 200) {
        notify("تم اضافه المنتج الي المفضلات  بنجاح", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify(" انت غير مسجل ", "error");
      }
      //   if (resAdd) {
      //   }
    }
  }, [LoadingAdd]);

  useEffect(() => {
    if (LoadingRemove === false) {
      if (resRemove && resRemove.status === 200) {
        notify("تم حذف المنتج الي المفضلات  بنجاح", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("انتا غير مسجل", "error");
      }
      //   if (resRemove) {
      //   }
    }
  }, [LoadingRemove]);

  return [romoveFromWishlist, addToWishlist, handleFav, favImg];
}
