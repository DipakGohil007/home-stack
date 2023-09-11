import React from "react";
import "./ProjectSection.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProjectSectionCard from "./ProjectSectionCard/ProjectSectionCard";
// import ProjectSectionTag from './ProjectSectionTag/ProjectSectionTag';
import { images } from "../../../assets/images/images";

const ProjectSection = () => (
  <div className="ProjectSection">
    <Container>
      <Row>
        <Col xs={12} data-aos="fade-up">
          <h2 className="SectionTitle">
            <span className="Highlight">Featured</span> Projects
          </h2>
        </Col>
        <Col xs={12}>
          <ProjectSectionCard
            Varient="Primary"
            ProjectTitle="Real Estate Agency Website"
            TagTitles={["UIUX Design", "Branding"]}
            MockupImage={images.MockupOne}
            MockupImageAlt="MockupOne Image"
            MarginBottom={true}
          />
        </Col>
        <Col xs={12}>
          <ProjectSectionCard
            Varient="Secondary"
            ProjectTitle="Property Agent Website"
            TagTitles={["UIUX Design", "Development"]}
            MockupImage={images.MockupTwo}
            MockupImageAlt="MockupTwo Image"
            Reverse={true}
            MarginBottom={true}
          />
        </Col>
        <Col xs={12}>
          <ProjectSectionCard
            Varient="Tertiary"
            ProjectTitle="Movie Apps Mobile"
            TagTitles={["UIUX Design"]}
            MockupImage={images.MockupThree}
            MockupImageAlt="MockupThree Image"
            MarginBottom={false}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProjectSection;
