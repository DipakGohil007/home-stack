import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = (props) => (
  <div className="ExperienceCard">
    <div className="ExperienceCardIcon">
      {props.ExperienceCardIcon}
    </div>
    <div className="Wrapper">
      <h3 className='ExperienceCardTitle'>{props.ExperienceCardTitle}</h3>
      <p className='ExperienceCardDesc'>{props.ExperienceCardDesc}</p>
    </div>
  </div>
);

export default ExperienceCard;