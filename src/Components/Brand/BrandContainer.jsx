import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";
import AllBrandPageHook from "../../Hook/Brand/AllBrandPageHook";
import BrandCard from "./BrandCard";
import { Link } from "react-router-dom";
export default function BrandContainer({ data, loading }) {
  return (
    <>
      <Container>
        <h3 className="my-4">اشهر الماركات</h3>
        <Row className="my-1 d-flex justify-content-between">
          {loading === false ? (
            data ? (
              data.map((item, index) => {
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
