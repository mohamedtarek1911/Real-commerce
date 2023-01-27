import React from "react";
import { Container, Row } from "react-bootstrap";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";
import BrandCard from "../../Components/Brand/BrandCard";
export default function BrandContainer() {
  return (
    <>
      <Container>
        <h3 className="my-4">اشهر الماركات</h3>
        <Row className="my-1 d-flex justify-content-between">
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
          <BrandCard img={brand1} />
          <BrandCard img={brand2} />
          <BrandCard img={brand3} />
          <BrandCard img={brand2} />
          <BrandCard img={brand1} />
          <BrandCard img={brand3} />
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
