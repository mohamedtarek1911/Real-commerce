import React from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import mobile from "../../Assets/images/mobile.png";
import mobile2 from "../../Assets/images/mobile1.png";
import mobile3 from "../../Assets/images/mobile2.png";
import ViewProductDetailsHook from "../../Hook/Product/ViewProductDetailsHook";
import LeftClick from "./LeftClick";
import RightClick from "./RightClick";

export default function ProductGalary() {
  const { id } = useParams();
  const [item, images, cat, brand, products] = ViewProductDetailsHook(id);

  return (
    <>
      <div
        className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2"
      >
        <ImageGallery
          showFullscreenButton={false}
          isRTL={true}
          showPlayButton={false}
          disableKeyDown={true}
          autoPlay={true}
          renderLeftNav={RightClick}
          renderRightNav={LeftClick}
          items={images}
        />
      </div>
    </>
  );
}
