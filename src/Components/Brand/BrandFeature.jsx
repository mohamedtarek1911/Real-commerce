import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utlity/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";
import HomeBrandHook from "../../Hook/Brand/HomeBrandHook";

export default function BrandFeature({ title, btntitle }) {
  const [brand, loading] = HomeBrandHook();

  return (
    <>
      <Container>
        <SubTitle title={title} btntitle={btntitle} pathTitle={"/AllBrands"} />
        <Row className="my-1 d-flex justify-content-between">
          {/* <BrandCard img={brand1} data={brand} /> */}

          {loading === false ? (
            brand ? (
              brand.data.slice(0, 5).map((item, index) => {
                return <BrandCard id={item._id} key={index} img={item.image} />;
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
