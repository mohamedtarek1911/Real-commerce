import React from "react";
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import login from "../../Assets/images/login.png";
import cart from "../../Assets/images/cart.png";
import logo from "../../Assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import NavbarSearchHook from "../../Hook/Search/NavbarSearchHook";
import { useState } from "react";
import { useEffect } from "react";
import GetAllUserCartHook from "../../Hook/Cart/GetAllUserCartHook";
export default function NavbarLogin() {
  const [User, setUser] = useState("");
  const [SearchWord, handleSearch] = NavbarSearchHook();

  const [
    res,
    Loading,
    ItemsNum,
    CartItems,
    TotalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("user-email");

    setUser("");
  };

  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <a>
                <img src={logo} className="logo" />
              </a>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="ابحث..."
              className="me-2 w-100 text-center"
              aria-label="Search"
              onChange={handleSearch}
              value={word}
            />
            <Nav className="me-auto">
              {User != "" ? (
                <NavDropdown title={User.name} id="basic-nav-dropdown">
                  {User.role === "admin" ? (
                    <NavDropdown.Item href="/admin/allproducts">
                      لوحة التحكم
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item href="/user/profile">
                      الصفحه الشخصية
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut} href="/">
                    تسجيل خروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link
                  className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
                  to="/login"
                >
                  <a className=" mx-2 nav-text d-flex mt-3 justify-content-center text-decoration-none">
                    <img src={login} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>دخول</p>
                  </a>
                </Link>
              )}

              <Link
                className="nav-text mx-2 position-relative d-flex mt-3 justify-content-center text-decoration-none"
                to="/cart"
                style={{ color: "white" }}
              >
                <a className="nav-text d-flex mt-3 justify-content-center text-decoration-none">
                  <img src={cart} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>العربه</p>
                </a>
                <span class="position-absolute badge-postion start-0 translate-middle badge rounded-pill bg-danger">
                  {ItemsNum || 0}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
