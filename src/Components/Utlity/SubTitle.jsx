import React from "react";
import { Link } from "react-router-dom";

export default function SubTitle({ title, btntitle, pathTitle }) {
  return (
    <>
      <div className="d-flex justify-content-between pt-4">
        <div className="sub-tile">{title}</div>
        <Link to={pathTitle} style={{ textDecoration: "none" }}>
          {btntitle ? <div className="shopping-now">{btntitle}</div> : null}
        </Link>
      </div>
    </>
  );
}
