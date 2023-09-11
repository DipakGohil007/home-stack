import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./ServiceSection.scss";
import IconUI from "../../../assets/svg/IconUI";
import IconMotion from "../../../assets/svg/IconMotion";
import IconPrototype from "../../../assets/svg/IconPrototype";
import IconResearch from "../../../assets/svg/IconResearch";
import { Col, Container, Row } from "react-bootstrap";

const ServiceSection = () => (
  <div className="ServiceSection">
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className="SectionTitle" data-aos="fade-up">
            What <span className="Highlight">service</span> do I provide
          </h2>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <ServiceCard
            ServiceCardIcon={<IconUI />}
            ServiceCardTitle="UI Design"
            ServiceCardDesc="Varius amet, integer tellus non eget viverra. Ultrices tellus donec gravida id sed senectus dolor cursus sed. "
            MarginBottom={true}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="translate-y mb-5 d-flex justify-content-center"
        >
          <ServiceCard
            ServiceCardIcon={<IconMotion />}
            ServiceCardTitle="Motion Design"
            ServiceCardDesc="Porta sit curabitur tempor nulla diam. Lacus ligula sem tristique egestas orci cursus lectus ut."
            MarginBottom={true}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="mb-5 d-flex justify-content-center"
          data-aos="fade-up"
        >
          <ServiceCard
            ServiceCardIcon={<IconPrototype />}
            ServiceCardTitle="Prototype"
            ServiceCardDesc="Ridiculus nulla eu ultricies auctor purus. Tristique facilisis fermentum non in."
            MarginBottom={true}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="translate-y mb-sm-5 d-flex justify-content-center"
        >
          <ServiceCard
            ServiceCardIcon={<IconResearch />}
            ServiceCardTitle="UX Research"
            ServiceCardDesc="Ac non massa non accumsan eget congue pellentesque neque. Pulvinar aliquet at puru."
            MarginBottom={false}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ServiceSection;
