import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getProductLike,
} from "../../Redux/Actions/ProductAction";
import mobile from "../../Assets/images/mobile.png";
import { getOneCategory } from "../../Redux/Actions/CategoryAction";
import { getOneBrand } from "../../Redux/Actions/brandAction";

export default function ViewProductDetailsHook(proId, catId) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(proId));
  }, []);
  const oneProduct = useSelector((state) => state.allProduct.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productLike = useSelector((state) => state.allProduct.productLike);

  let item = [];

  if (oneProduct.data) {
    item = oneProduct.data;
  } else {
    item = [];
  }
  console.log();

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.category) {
      dispatch(getProductLike(item.category));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
  }, [item]);

  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{ original: mobile }];
  }
  let cat = [];
  if (oneCategory.data) {
    cat = oneCategory.data;
  } else {
    cat = [];
  }

  let brand = [];
  if (oneBrand.data) {
    brand = oneBrand.data;
  } else {
    brand = [];
  }

  let products = [];

  try {
    if (productLike) {
      products = productLike.data;
      console.log(productLike.data);
    } else {
      products = [];
    }
  } catch (e) {}

  return [item, images, cat, brand, products];
}
