import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utlity/SubTitle";
import image from "../../Assets/images/clothe.png";
import image2 from "../../Assets/images/labtop.png";
import image3 from "../../Assets/images/mobile.png";

export default function HomeCategory() {
  return (
    <>
      <Container>
        <SubTitle
          title={"التصنيفات"}
          btntitle={"المزيد"}
          pathTitle="/AllCategory"
        />
        <Row className="d-flex mt-3 justify-content-between">
          <CategoryCard
            img={image}
            title={"اجهزة كهربائية"}
            background="#ffc107"
          />
          <CategoryCard
            img={image2}
            title={"اجهزة كهربائية"}
            background="#915970"
          />
          <CategoryCard
            img={image3}
            title={"اجهزة كهربائية"}
            background="#7bccdc"
          />
          <CategoryCard
            img={image}
            title={"اجهزة كهربائية"}
            background="#ffc107"
          />
          <CategoryCard
            img={image2}
            title={"اجهزة كهربائية"}
            background="#915970"
          />
          <CategoryCard
            img={image3}
            title={"اجهزة كهربائية"}
            background="#7bccdc"
          />
        </Row>
      </Container>
    </>
  );
}
