import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CTAButton from "../CTAButton/CTAButton";
import "./Footer.scss";
import IconInsta from "../../assets/svg/IconInsta";
import IconDribble from "../../assets/svg/IconDribble";
import IconBE from "../../assets/svg/IconBE";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="Footer">
    <Container>
      <Row data-aos="fade-up">
        <Col xs={12}>
          <div className="CTA">
            <div className="Content">
              <h1 className="FooterHeading">
                Have a project idea to{" "}
                <span className="Highlight">collaborate with</span>?
              </h1>
              <CTAButton varient="Secondary" BtnText="Contact Us" />
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="SocialMedia">
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
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
