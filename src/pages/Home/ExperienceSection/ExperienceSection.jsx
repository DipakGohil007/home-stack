import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ExperienceSection.scss";
import LineDecoration from "../../../assets/svg/LineDecoration";
import EllipseOne from "../../../assets/svg/EllipseOne";
import EllipseTwo from "../../../assets/svg/EllipseTwo";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import IconSlack from "../../../assets/svg/IconSlack";
import IconFirefox from "../../../assets/svg/IconFirefox";
import IconDigitalOcean from "../../../assets/svg/IconDegitalOcean";
import IconMailchim from "../../../assets/svg/IconMailchim";

const ExperienceSection = () => (
  <div className="ExperienceSection">
    <Container>
      <Row>
        <Col sm={12} lg={6}>
          <div className="Title" data-aos="fade-up">
            <div className="TitleWrapper">
              <h3>
                Working <span className="Highlight">experience</span>
              </h3>
              <p>
                Tincidunt purus lacus nascetur nunc commodo. Netus at dignissim
                urna quam. Imperdiet proin sapien posuere egestas. Tristique nam
                magna velit odio ullamcorper eget donec.
              </p>
              <div className="LineDecoration">
                <LineDecoration />
              </div>
            </div>
            <div className="EllipseOne">
              <EllipseOne />
            </div>
            <div className="EllipseTwo">
              <EllipseTwo />
            </div>
          </div>
        </Col>

        <Col sm={12} lg={6} data-aos="fade-up">
          <div className="Experience">
            <ExperienceCard
              ExperienceCardIcon={<IconSlack />}
              ExperienceCardTitle="Slack"
              ExperienceCardDesc="Product Design - 4 Years Experince"
            />
            <ExperienceCard
              ExperienceCardIcon={<IconFirefox />}
              ExperienceCardTitle="Firefox"
              ExperienceCardDesc="Sr. UI Design - 4 Years Experince"
            />
            <ExperienceCard
              ExperienceCardIcon={<IconDigitalOcean />}
              ExperienceCardTitle="Digital Ocean"
              ExperienceCardDesc="UI & Motion Designer - 4 Years Experince"
            />
            <ExperienceCard
              ExperienceCardIcon={<IconMailchim />}
              ExperienceCardTitle="Mailchim"
              ExperienceCardDesc="UI Designer - 4 Years Experince"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ExperienceSection;
