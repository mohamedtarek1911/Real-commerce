import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllCategoryPageHook from "../../Hook/Category/AllCategoryPageHook";
import HomeCategoryHook from "../../Hook/Category/HomeCategoryHook";
import ViewCategoryHeaderHook from "../../Hook/Category/ViewCategoryHeaderHook";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryHeader() {
  // const [data, loading, pageCount, getPage] = AllCategoryPageHook();

  const [allCategory] = ViewCategoryHeaderHook();

  // const [colors, category, loading] = HomeCategoryHook();

  console.log(allCategory);

  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (allCategory) {
      setCategory(allCategory);
    }
  }, []);

  console.log(category);

  return (
    <>
      <div className="cat-header">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start py-2 flex-wrap">
              {category.data
                ? category.data.slice(0, 4).map((item, index) => {
                    return (
                      <Link
                        to={`/Products/Category/${item._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div key={index} className="cat-text-header">
                          {item.name}
                        </div>
                      </Link>
                    );
                  })
                : null}
              <Link to="/AllCategory" style={{ textDecoration: "none" }}>
                <div className="cat-text-header">المزيد</div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
