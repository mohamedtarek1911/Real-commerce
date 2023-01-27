import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utlity/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";

export default function BrandFeature({ title, btntitle }) {
  return (
    <>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathTitle={"/AllBrands"} />
        <Row className="my-1 d-flex justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
        </Row>
      </Container>
    </>
  );
}
