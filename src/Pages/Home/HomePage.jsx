import React from "react";
// import NavbarLogin from "../../Components/Utlity/NavbarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeature from "../../Components/Brand/BrandFeature";
// import Footer from "../../Components/Utlity/Footer";

export default function HomePage() {
  return (
    <>
      {/* <NavbarLogin /> */}
      <Slider />
      <HomeCategory />
      <CardProductsContainer
        title={"الاكثر مبيعاً"}
        btntitle={"المزيد"}
        pathTitle="/AllProducts"
      />
      <DiscountSection />
      <CardProductsContainer
        title={"الاكثر تقييماً"}
        btntitle={"المزيد"}
        pathTitle="/AllProducts"
      />
      <BrandFeature title={"اشهر الماركات"} btntitle={"المزيد"} />
      {/* <Footer /> */}
    </>
  );
}
