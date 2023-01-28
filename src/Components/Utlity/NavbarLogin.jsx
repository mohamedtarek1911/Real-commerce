import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import login from "../../Assets/images/login.png";
import cart from "../../Assets/images/cart.png";
import logo from "../../Assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
export default function NavbarLogin() {
  return (
    <>
      {/* <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} alt="mbscb" className="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="ابحث..."
              className="me-2 w-100 text-center"
              aria-label="Search"
            />
            <Nav className="me-auto">
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>

              <Nav.Link
                href="/cart"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "white" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>العربه</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
        <Container>
          {/* <NavLink></NavLink> */}
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
            />
            <Nav className="me-auto">
              <Link
                className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
                to="/login"
              >
                <a className=" mx-2 nav-text d-flex mt-3 justify-content-center text-decoration-none">
                  <img src={login} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>دخول</p>
                </a>
              </Link>
              <Link
                className="nav-text mx-2 d-flex mt-3 justify-content-center text-decoration-none"
                to="/cart"
                style={{ color: "white" }}
              >
                <a className="nav-text d-flex mt-3 justify-content-center text-decoration-none">
                  <img src={cart} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>العربه</p>
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
