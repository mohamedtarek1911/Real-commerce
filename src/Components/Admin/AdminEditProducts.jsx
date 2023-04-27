import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import { CompactPicker } from "react-color";
import MultiImageInput from "react-multiple-image-input";
import Multiselect from "multiselect-react-dropdown";
import AddProductHook from "../../Hook/Product/AddProductHook";
import add from "../../Assets/images/add.png";
import ViewEditProductHook from "../../Hook/Product/ViewEditProductHook";

export default function AdminEditProducts() {
  const { id } = useParams();

  const [
    images,
    setImages,
    ProdName,
    handleEnterName,
    handleEnterDesc,
    ProdDesc,
    PriceBefore,
    handleEnterPriceBefore,
    PriceAfter,
    handleEnterPriceAfter,
    Qty,
    handleEnterQantity,
    handleSelectedCategory,
    category,
    options,
    onSelect,
    onRemove,
    brand,
    Colors,
    removeColor,
    showColor,
    handleColorChange,
    handleSubmit,
    ShowColor,
    handleSelectedBrand,
    CatId,
    BrandId,
  ] = ViewEditProductHook(id);

  return (
    <>
      <div>
        <Row className="justify-content-start ">
          <div className="admin-content-text pb-4">
            تعديل منتج جديد-{ProdName}
          </div>
          <Col sm="8">
            <div className="text-form pb-2"> صور للمنتج</div>
            <MultiImageInput
              images={images}
              setImages={setImages}
              theme={"light"}
              max={6}
              allowCrop={false}
            />
            <input
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="اسم المنتج"
              value={ProdName}
              onChange={handleEnterName}
            />
            <textarea
              className="input-form-area p-2 mt-3"
              rows="4"
              cols="50"
              placeholder="وصف المنتج"
              onChange={handleEnterDesc}
              value={ProdDesc}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="السعر قبل الخصم"
              value={PriceBefore}
              onChange={handleEnterPriceBefore}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="سعر المنتج"
              value={PriceAfter}
              onChange={handleEnterPriceAfter}
            />
            <input
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="الكمية المتاحة"
              value={Qty}
              onChange={handleEnterQantity}
            />
            <select
              name="cat"
              className="select input-form-area mt-3 px-2 "
              onChange={handleSelectedCategory}
              value={CatId}
            >
              <option value="0">التصنيف الرئيسي</option>
              {category.data
                ? category.data.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <Multiselect
              className="mt-2 text-end"
              placeholder="التصنيف الفرعي"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              style={{ color: "red" }}
            />
            <select
              name="brand"
              id="brand"
              onChange={handleSelectedBrand}
              className="select input-form-area mt-3 px-2 "
              value={BrandId}
            >
              <option value="val">الماركة</option>
              {brand.data
                ? brand.data.map((item) => {
                    return (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  })
                : null}
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex">
              {Colors.length >= 1
                ? Colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => removeColor(color)}
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })
                : null}

              <img
                src={add}
                onClick={showColor}
                alt=""
                width="30px"
                height="35px"
                className=""
                style={{ cursor: "pointer" }}
              />
            </div>
            {/* <CirclePicker />
            CompactPicker
            <SketchPicker /> */}
            {ShowColor === true ? (
              <CompactPicker onChangeComplete={handleColorChange} />
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
              حفظ التعديلات
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </>
  );
}
