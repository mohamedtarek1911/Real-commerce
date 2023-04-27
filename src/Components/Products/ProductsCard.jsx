import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../Assets/images/rate.png";
import prod1 from "../../Assets/images/item.png";
import favoff from "../../Assets/images/fav-off.png";
import favon from "../../Assets/images/fav-on.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishlist,
  removeProductToWishlist,
} from "../../Redux/Actions/wishlistAction";
import notify from "../../Hook/UseNotfications";
import { ToastContainer } from "react-toastify";
import WishlistProductsHook from "../../Hook/WishList/WishlistProductsHook";
export default function ProductsCard({ item, FavProducts }) {
  const [romoveFromWishlist, addToWishlist, handleFav, favImg] =
    WishlistProductsHook(item, FavProducts);

  console.log();

  return (
    <>
      <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Link to={`/ProductsDetails/${item._id}`}>
            <Card.Img
              style={{ height: "228px", width: "100%" }}
              // src={`http://127.0.0.1:8000/products/${item.imageCover}`}
              src={item.imageCover}
            />
          </Link>

          <div className="d-flex justify-content-end mx-2">
            <img
              onClick={handleFav}
              src={favImg}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
                cursor: "pointer",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.title} </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate mx-2">{item.ratingsQuantity}</div>
                </div>
                <div className="d-flex">
                  <div className="card-price">{item.price}</div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <ToastContainer />
      </Col>
    </>
  );
}
