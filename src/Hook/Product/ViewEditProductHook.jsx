import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/brandAction";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import {
  craeteProduct,
  getOneProduct,
  updateProduct,
} from "../../Redux/Actions/ProductAction";
import { getOneCategory } from "../../Redux/Actions/SubCategoryAction";
import notify from "../UseNotfications";

export default function ViewEditProductHook(id) {
  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
      await dispatch(getOneProduct(id));
    };
    run();
  }, []);

  const item = useSelector((state) => state.allProduct.oneProduct);
  if (item) {
    console.log(item.data);
  }
  const category = useSelector((state) => state.allCategory.category);
  const brand = useSelector((state) => state.allBrand.brand);
  const subCat = useSelector((state) => state.subCategory.subcategory);

  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [ProdName, setProdName] = useState("");
  const [ProdDesc, setProdDesc] = useState("");
  const [PriceBefore, setPriceBefore] = useState("السعر قبل الخصم ");
  const [PriceAfter, setPriceAfter] = useState("السعر بعد الخصم ");
  const [Qty, setQty] = useState("الكمية المتاحة");
  const [CatId, setCatId] = useState("");
  const [BrandId, setBrandId] = useState("");
  const [SubCatId, setSubCatId] = useState([]);
  const [SelectedSubId, setSelectedSubId] = useState([]);
  const [ShowColor, setShowColor] = useState(false);
  const [Colors, setColors] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (item.data) {
      setProdName(item.data.title);
      setProdDesc(item.data.description);
      setPriceAfter(item.data.price);
      setQty(item.data.quantity);
      setCatId(item.data.category);
      setBrandId(item.data.brand);
      setColors(item.data.availableColors);
      setImages(item.data.images);
    }
  }, [item]);

  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList);
  };

  const handleEnterName = (e) => {
    setProdName(e.target.value);

    console.log(ProdName);
  };
  const handleEnterDesc = (e) => {
    setProdDesc(e.target.value);
    console.log(ProdDesc);
  };
  const handleEnterPriceBefore = (e) => {
    setPriceBefore(e.target.value);
  };
  const handleEnterPriceAfter = (e) => {
    setPriceAfter(e.target.value);
  };
  const handleEnterQantity = (e) => {
    setQty(e.target.value);
  };

  const handleSelectedCategory = async (e) => {
    setCatId(e.target.value);
  };
  const handleSelectedBrand = (e) => {
    setBrandId(e.target.value);
  };

  const showColor = () => {
    setShowColor(!ShowColor);
  };
  const handleColorChange = (color) => {
    setColors([...Colors, color.hex]);
    setShowColor(!ShowColor);
  };

  const removeColor = (color) => {
    const newColors = Colors.filter((e) => e !== color);
    setColors(newColors);
  };
  useEffect(() => {
    if (CatId != 0) {
      const run = async (e) => {
        await dispatch(getOneCategory(CatId));
      };
      run();
    }
  }, [CatId]);

  useEffect(() => {
    if (subCat.data) {
      setOptions(subCat.data);
    }
  }, [subCat]);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      CatId === 0 ||
      ProdName === "" ||
      ProdDesc === "" ||
      images.length <= 0 ||
      PriceBefore <= 0
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    let imgCover;
    if (images[0].length <= 1000) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 1000) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });
    const formData = new FormData();

    formData.append("title", ProdName);
    formData.append("description", ProdDesc);
    formData.append("quantity", Qty);
    formData.append("price", PriceBefore);
    formData.append("imageCover", imgCover);
    formData.append("category", CatId);
    formData.append("brand", BrandId);
    Colors.map((color) => {
      return formData.append("availableColors", color);
    });
    SelectedSubId.map((item) => {
      return formData.append("subcategory", item._id);
    });
    itemImages.map((item) => formData.append("images", item));
    setTimeout(() => {
      formData.append("imageCover", imgCover);
      itemImages.map((item) => formData.append("images", item));
    }, 1000);
    setLoading(true);
    await dispatch(updateProduct(id, formData));
    setLoading(false);
  };
  const product = useSelector((state) => state.allProduct.updateProduct);
  console.log(product);
  useEffect(() => {
    if (Loading === false) {
      setCatId(0);
      setColors([]);
      setImages([]);
      setProdName("");
      setProdDesc("");
      setPriceBefore("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحة");
      setBrandId(0);
      setSelectedSubId([]);
      setSubCatId([]);
      setTimeout(() => setLoading(true), 1500);

      if (product) {
        if (product.status === 200 || 201) {
          notify("تم التعديل بنجاح", "success");
          setTimeout(() => window.location.reload(), 50000);
        } else {
          notify("هناك مشكله", "error");
        }
      }
    }
  }, [Loading]);

  return [
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
  ];
}
