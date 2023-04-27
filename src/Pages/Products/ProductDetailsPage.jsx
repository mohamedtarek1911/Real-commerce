import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ViewProductDetailsHook from "../../Hook/Product/ViewProductDetailsHook";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [item, images, cat, brand, products] = ViewProductDetailsHook(id);
  try {
    if (products) {
      var items = products.slice(0, 4);
    }
  } catch (e) {}

  try {
    if (item) {
      var ratingAvg = item.ratingsAverage;
      var ratingQty = item.ratingsQuantity;
      console.log(item);
    }
  } catch (e) {}

  return (
    <>
      <div style={{ minHeight: "730px" }}>
        <CategoryHeader />
        <Container>
          <ProductDetails />
          <RateContainer ratingAvg={ratingAvg} ratingQty={ratingQty} />
          <CardProductsContainer products={items} title="منتجات قد تعجبك" />
        </Container>
      </div>
    </>
  );
}
