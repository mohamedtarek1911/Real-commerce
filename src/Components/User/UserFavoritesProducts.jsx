import React from "react";
import { Row } from "react-bootstrap";
import ProductsCard from "../Products/ProductsCard";
import Pagination from "../Utlity/Pagination";
import CardProductsContainer from "../Products/CardProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAllProductWishlist } from "../../Redux/Actions/wishlistAction";

export default function UserFavoritesProducts() {
  const [Loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.wishlistReducer.allWishlist);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getAllProductWishlist());
      setLoading(false);
    };
    run();
  }, []);

  useEffect(() => {
    if (Loading === false) {
      if (res) {
        setItems(res.data);
      }
    }
  }, [Loading]);

  return (
    <>
      <div>
        <div className="admin-content-text pb-4">قائمة المفضلة</div>
        <Row className="justify-content-start">
          {items.length <= 0 ? (
            <h6>لا يوجد منتجات مفضلة</h6>
          ) : (
            <CardProductsContainer products={items} title={""} btntitle={""} />
          )}
        </Row>
        <Pagination />
      </div>
    </>
  );
}
