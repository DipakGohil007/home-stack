import React from "react";
import "./ProjectSectionCard.scss";
import { Col, Row } from "react-bootstrap";
import IconArrow from "../../../../assets/svg/IconArrow";
import { Link } from "react-router-dom";

const ProjectSectionCard = (props) => (
  <div
    className={`ProjectSectionCard ${props.Varient} ${
      props.MarginBottom ? "" : "mb-0"
    }`}
    data-aos="fade-up"
  >
    <Row className={props.Reverse ? "flex-row-reverse" : ""}>
      <Col xs={12} lg={6}>
        <div className="Content">
          <div className="Project">
            <div className="ProjectTitle">{props.ProjectTitle}</div>
            <div className="TagWrapper">
              {props.TagTitles.map((tag, index) => (
                <Link to="/" className="ProjectSectionTag" key={index}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/" className="CTA">
            See Detail Project
            <IconArrow />
          </Link>
        </div>
      </Col>

      <Col xs={12} lg={6}>
        <div className="Mockup">
          <img src={props.MockupImage} alt={props.MockupImageAlt} />
        </div>
      </Col>
    </Row>
  </div>
);

export default ProjectSectionCard;
