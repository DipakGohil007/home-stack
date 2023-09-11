import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/images";
import "./Header.scss";
import SearchSlide from "./SlideSearch/SlideSearch";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <Navbar
      className={`Header ${scrollPosition > 50 ? "scrolled" : ""}`}
      expand="lg"
    >
      <Container>
        <Link to="/" className="Logo">
          <img src={images.Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse className="Navbar" id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/" className="nav-link ">
              About Me
            </Link>
            <Link to="/" className="nav-link ">
              Projects
            </Link>
          </Nav>
          <button className="SearchBtn">
            <SearchSlide />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
