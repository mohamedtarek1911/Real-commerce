import React from "react";
// import NavbarLogin from "../../Components/Utlity/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeature";
import ViewHomeProduct from "../../Hook/Product/ViewHomeProductHook";
import ViewHomeProductHook from "../../Hook/Product/ViewHomeProductHook";
// import Footer from "../../Components/Utlity/Footer";

export default function HomePage() {
  const [items] = ViewHomeProductHook();
  if (items) {
    var products = items;
  } else {
    products = [];
  }
  return (
    <>
      {/* <NavbarLogin /> */}
      <Slider />
      <HomeCategory />
      <div className="mt-4"></div>
      <CardProductsContainer
        products={products}
        title={"الاكثر مبيعاً"}
        btntitle={"المزيد"}
        pathTitle="/AllProducts"
      />
      <DiscountSection />
      <CardProductsContainer
        products={products}
        title={"الاكثر تقييماً"}
        btntitle={"المزيد"}
        pathTitle="/AllProducts"
      />
      <BrandFeature title={"اشهر الماركات"} btntitle={"المزيد"} />
      {/* <Footer /> */}
    </>
  );
}
