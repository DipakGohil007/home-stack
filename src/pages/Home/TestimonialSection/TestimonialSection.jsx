import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import "./TestimonialSection.scss";

const TestimonialSection = () => (
  <div className="TestimonialSection">
    <Container fluid>
      <Row>
        <Col xs={12} data-aos="fade-up">
          <h2 className="TestimonialSectionHeading">
            What <span className="Highlight">they say</span> about me
          </h2>
        </Col>
        <Col xs={12} data-aos="fade-up">
          <div className="TestimonialCarrousel">
            <TestimonialCarousel />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TestimonialSection;
