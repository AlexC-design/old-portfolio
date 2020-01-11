import React from "react";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";

import "./footer.css";
import { withRouter } from "react-router-dom";
import { PhoneIcon } from "./icons/PhoneIcon";
import { MailIcon } from "./icons/MailIcon";

const Footer = props => {
  return (
    <div className={`footer ${props.location.pathname.replace("/", "")}`}>
      <div className="text-container">
        <h3 className="name">Alexandru Ciobotaru</h3>
        <div className="phone-number">
          {props.location.pathname === "/contact" && <PhoneIcon />}
          <h3>+447432703853</h3>
        </div>
        <div className="email-address">
          {props.location.pathname === "/contact" && <MailIcon />}
          <h3>alex94.design@gmail.com</h3>
        </div>
      </div>
      <div className="icons-container">
        <img src={githubIcon} alt="github icon" />
        <img src={linkedinIcon} alt="linked in icon" />
      </div>
    </div>
  );
};

export default withRouter(Footer);
