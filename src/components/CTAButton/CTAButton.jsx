import React from "react";
import { Link } from "react-router-dom";
import "./CTAButton.scss";

const CTAButton = (props) => (
  <Link to="/" className={`CTAButton ${props.varient}`}>
    {props.BtnText}
  </Link>
);

export default CTAButton;
