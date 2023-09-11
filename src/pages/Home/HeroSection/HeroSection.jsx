import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "../../../assets/images/images";
import "./HeroSection.scss";
import IconInsta from "../../../assets/svg/IconInsta";
import IconDribble from "../../../assets/svg/IconDribble";
import IconBE from "../../../assets/svg/IconBE";
import Line from "../../../assets/svg/Line";
import CTAButton from "../../../components/CTAButton/CTAButton";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <Container>
        <Row className="flex-wrap-reverse">
          <Col lg={6} data-aos="zoom-in-down">
            <h3 className="HeroText">Hi, I am samantha</h3>
            <h1 className="HeroTitle">
              Professional <span className="Highlight">product designer </span>{" "}
              based in USA{" "}
            </h1>
            <p className="HeroDesc">
              Varius amet, integer tellus non eget viverra. Ultrices tellus
              donec gravida id sed senectus dolor cursus sed. Ullamcorper tellus
              ac cras nec, pretium laoreet duis.{" "}
            </p>
            <div className="CtaWrapper">
              <CTAButton varient="Primary" BtnText="Contact Us" />
              <div className="SocialIcon">
                <Link to="/">
                  <IconInsta />
                </Link>
                <Link to="/">
                  <IconDribble />
                </Link>
                <Link to="/">
                  <IconBE />
                </Link>
              </div>
              <Link to="/" className="LineDecoration">
                <Line />
              </Link>
            </div>
          </Col>
          <Col lg={6} data-aos="zoom-in-down">
            <div className="ImageWrapper">
              <img src={images.HeroGraphic} alt="Hero Graphic" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
