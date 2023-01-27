import React from "react";
import next from "../../Assets/images/next.png";

export default function LeftClick(onClick, onDisable) {
  return (
    <>
      <div>
        <img
          src={next}
          alt=""
          width="35px"
          onClick={onClick}
          onDisable={onDisable}
          height="35px"
          style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
      </div>
    </>
  );
}
