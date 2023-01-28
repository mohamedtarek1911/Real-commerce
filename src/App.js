import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NavbarLogin from "./Components/Utlity/NavbarLogin";
import Footer from "./Components/Utlity/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/AllCategory/AllCategoryPage";
import AllBrandsPage from "./Pages/AllBrands/AllBrandsPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/cart/CartPage";
import ChoosePayMethodPage from "./Pages/Cheackout/ChoosePayMethodPage";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrderPage from "./Pages/Admin/AdminAllOrderPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddProductPage from "./Pages/Admin/AdminAddProductPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminSubCategoryPage from "./Pages/Admin/AdminSubCategoryPage";
import AdminNewProductPage from "./Pages/Admin/AdminNewProductPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserFavoritesProductsPage from "./Pages/User/UserFavoritesProductsPage";
import UserAllAdressesPage from "./Pages/User/UserAllAdressesPage";
import UserAddAdressPage from "./Pages/User/UserAddAdressPage";
import UserEditAdresessPage from "./Pages/User/UserEditAdresessPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
export default function App() {
  return (
    <>
      <div className="font">
        <BrowserRouter>
          <NavbarLogin />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/AllCategory" element={<AllCategoryPage />} />
            <Route path="/AllBrands" element={<AllBrandsPage />} />
            <Route path="/AllProducts" element={<ShopProductsPage />} />
            <Route
              path="/ProductsDetails/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/order/paymethod" element={<ChoosePayMethodPage />} />
            <Route
              path="/admin/allproducts"
              element={<AdminAllProductsPage />}
            />
            <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
            <Route
              path="/admin/orders/:id"
              element={<AdminOrderDetailsPage />}
            />
            <Route path="/admin/addbrand" element={<AdminAddProductPage />} />
            <Route
              path="/admin/addcategory"
              element={<AdminAddCategoryPage />}
            />
            <Route
              path="/admin/addsubcategory"
              element={<AdminSubCategoryPage />}
            />
            <Route path="/admin/addproduct" element={<AdminNewProductPage />} />
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route
              path="user/favoriteproducts"
              element={<UserFavoritesProductsPage />}
            />
            <Route path="/user/addresses" element={<UserAllAdressesPage />} />
            <Route path="/user/add-address" element={<UserAddAdressPage />} />
            <Route
              path="/user/edit-address"
              element={<UserEditAdresessPage />}
            />
            <Route path="/user/profile" element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}
