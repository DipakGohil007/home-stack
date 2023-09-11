import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./CompanySection.scss";
import CompanyOne from "../../../assets/svg/CompanyOne";
import CompanyTwo from "../../../assets/svg/CompanyTwo";
import CompanyThree from "../../../assets/svg/CompanyThree";
import CompanyFour from "../../../assets/svg/CompanyFour";
import CompanyFive from "../../../assets/svg/CompanyFive";

const CompanySection = () => (
  <div className="CompanySection">
    <Container>
      <Row>
        <Col>
          <div className="Companies">
            <div className="CompanyLogo" data-aos="flip-up">
              <CompanyOne />
            </div>
            <div className="CompanyLogo" data-aos="flip-up">
              <CompanyTwo />
            </div>
            <div className="CompanyLogo" data-aos="flip-up">
              <CompanyThree />
            </div>
            <div className="CompanyLogo" data-aos="flip-up">
              <CompanyFour />
            </div>
            <div className="CompanyLogo" data-aos="flip-up">
              <CompanyFive />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CompanySection;
