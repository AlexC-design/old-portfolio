import React from "react";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";

import "./footer.css";

export default function Footer() {
  return (
    <div className={`footer`}>
      <div className="text-container">
        <h2 className="name">Alexandru Ciobotaru</h2>
        <div className="phone-number">
          <img src="" alt="phone-icon" />
          <h2>+447432703853</h2>
        </div>
        <div className="email-address">
          <img src="" alt="mail-icon" />
          <h2>alex94.design@gmail.com</h2>
        </div>
      </div>
      <div className="icons-container">
        <img src={githubIcon} alt="github icon" />
        <img src={linkedinIcon} alt="linked in icon" />
      </div>
    </div>
  );
}
