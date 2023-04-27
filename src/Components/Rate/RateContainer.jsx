import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import rate from "../../Assets/images/rate.png";
import GetAllReviewsHook from "../../Hook/Review/GetAllReviewsHook";
import Pagination from "../Utlity/Pagination";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
const RateContainer = ({ ratingQty, ratingAvg }) => {
  const { id } = useParams();
  const [allReviews, getPage, pageCount] = GetAllReviewsHook(id);
  return (
    <Container className="rate-container my-3">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{ratingAvg}</div>
          <div className="rate-count d-inline p-1 pt-2">{ratingQty} تقييم</div>
        </Col>
      </Row>
      <RatePost />
      {allReviews.data ? (
        allReviews.data.map((itemReview, index) => {
          return <RateItem itemReview={itemReview} key={index} />;
        })
      ) : (
        <h6>لا يوجد تقييمات الان</h6>
      )}

      {allReviews.paginationResult &&
      allReviews.paginationResult.numberOfPages >= 2 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </Container>
  );
};

export default RateContainer;
