import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./SubCategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishlistReducer from "./wishlistReducer";
import couponReducer from "./couponReducer";
import addressReducer from "./addressReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allProduct: productReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  wishlistReducer: wishlistReducer,
  couponReducer: couponReducer,
  addressReducer: addressReducer,
  userReducer: userReducer,
  cartReducer: cartReducer,
  checkoutReducer: checkoutReducer,
  orderReducer:orderReducer
});
