import React from "react";
import "./ServiceCard.scss";

const ServiceCard = (props) => (
  <div className={`ServiceCard ${props.MarginBottom ? "" : "mb-0"}`}>
    <div className="ServiceCardIcon">{props.ServiceCardIcon}</div>
    <h3 className="ServiceCardTitle">{props.ServiceCardTitle}</h3>
    <p className="ServiceCardDesc">{props.ServiceCardDesc}</p>
  </div>
);

export default ServiceCard;
