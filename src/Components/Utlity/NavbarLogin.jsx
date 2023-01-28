import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import login from "../../Assets/images/login.png";
import cart from "../../Assets/images/cart.png";
import logo from "../../Assets/images/logo.png";
// import { Link } from "react-router-dom";
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
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" />
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
              <Nav.Link href="/login">
                <a
                  className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
                  href="/login"
                >
                  <img src={login} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>دخول</p>
                </a>
              </Nav.Link>
              <Nav.Link href="/cart" style={{ color: "white" }}>
                <a
                  className="nav-text d-flex mt-3 justify-content-center text-decoration-none"
                  href="/cart"
                >
                  <img src={cart} className="login-img" alt="sfvs" />
                  <p style={{ color: "white" }}>العربه</p>
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
