import React from "react";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";

import "./footer.css";

export default function Footer({ expandState = "contracted" }) {
  return (
    <div className={`footer ${expandState}`}>
      <div className="text-container">
        <h1 className="name">Alexandru Ciobotaru</h1>
        <div className="phone-number">
          <img className="phone-icon" src="" alt="phone icon" />
          <h1>+447432703853</h1>
        </div>
        <div className="email-address">
          <img className="mail-icon" src="" alt="mail icon" />
          <h1>alex94.design@gmail.com</h1>
        </div>
      </div>
      <div className="icons-container">
        <img src={githubIcon} alt="github icon" />
        <img src={linkedinIcon} alt="linked in icon" />
      </div>
    </div>
  );
}
