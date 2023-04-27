import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import image from "../../Assets/images/clothe.png";
import image2 from "../../Assets/images/labtop.png";
import image3 from "../../Assets/images/mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
export default function CategoryContainer({ data }) {
  let loading = useSelector((state) => state.allCategory.loading);

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <>
      <Container>
        <h3 className="my-4">كل التصنيفات</h3>
        <Row className="d-flex mt-3 justify-content-between">
          {loading === false ? (
            data ? (
              data.map((item, index) => {
                return (
                  <CategoryCard
                    id={item._id}
                    key={index}
                    title={item.name}
                    img={item.image}
                    background={colors[Math.floor(Math.random() * 5) + 1]}
                  />
                );
              })
            ) : (
              <div className="text-center d-flex justify-content-center align-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            )
          ) : (
            <>
              <div className="text-center d-flex justify-content-center align-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            </>
          )}
          {/* <CategoryCard
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
          /> */}
        </Row>
      </Container>
    </>
  );
}
