import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import logo from "../Images/logo2.png";

function BasicExample() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > -0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar expand="lg" className={`navbar ${isSticky ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Smart Technology
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto navlink">
            <Link className="link1" to="/">
              Home
            </Link>

            <NavDropdown
              className="link2 "
              variant="secondary"
              title="Category"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <Link className="link" to="/laptop">
                  Laptop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/computer">
                  Computer
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/moniter">
                  Moniter
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/ram">
                  Ram
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/processor">
                <Link className="link" to="/processor">
                  Processor
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/ssd">
                <Link className="link" to="/ssd">
                  SSD
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="hdd">
                <Link className="link" to="/hdd">
                  Hard Disk
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="link1" to="/contact">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
