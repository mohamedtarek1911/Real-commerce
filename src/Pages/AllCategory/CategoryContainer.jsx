import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../../Components/Category/CategoryCard";
import image from "../../Assets/images/clothe.png";
import image2 from "../../Assets/images/labtop.png";
import image3 from "../../Assets/images/mobile.png";
export default function CategoryContainer() {
  return (
    <>
      <Container>
        <h3 className="my-4">كل التصنيفات</h3>
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
