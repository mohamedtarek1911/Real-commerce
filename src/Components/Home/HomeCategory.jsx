import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utlity/SubTitle";
import image from "../../Assets/images/clothe.png";
import image2 from "../../Assets/images/labtop.png";
import image3 from "../../Assets/images/mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import HomeCategoryHook from "../../Hook/Category/HomeCategoryHook";

export default function HomeCategory() {
  const [colors, category, loading] = HomeCategoryHook();

  return (
    <>
      <Container>
        <SubTitle
          title={"التصنيفات"}
          btntitle={"المزيد"}
          pathTitle="/AllCategory"
        />
        <Row className="d-flex mt-3 justify-content-between">
          {loading === false ? (
            category ? (
              category.data.slice(0, 5).map((item, index) => {
                return (
                  <CategoryCard
                    key={index}
                    title={item.name}
                    id={item._id}
                    img={item.image}
                    background={colors[index]}
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
        </Row>
      </Container>
    </>
  );
}
