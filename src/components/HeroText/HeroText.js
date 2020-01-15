import React from "react";
import { renderText } from "./renderText";

import "./hero-text.css";

export const HeroText = ({ layout, projectTitle, projectDescription }) => {
  switch (layout) {
    case "personal-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>Alexandru Ciobotaru</h1>
          <h2>Web Developer / Designer</h2>
          {renderText(`home`)}
        </div>
      );
    case "about-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>Alexandru Ciobotaru</h1>
          <h2>Web Developer / Designer</h2>
          {renderText(`about`)}
        </div>
      );
    case "project-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>{projectTitle}</h1>
          <p>{projectDescription}</p>
        </div>
      );
    default:
      return <h1>No text found for {layout}</h1>;
  }
};
