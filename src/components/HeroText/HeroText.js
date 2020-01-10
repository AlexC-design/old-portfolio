import React from "react";
import { renderText } from "./renderText";

import "./hero-text.css";

export const HeroText = ({ layout }) => {
  switch (layout) {
    case "personal-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>Alexandru Ciobotaru</h1>
          <h2>Web Developer</h2>
          {renderText(`home`)}
        </div>
      );
    case "about-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>Alexandru Ciobotaru</h1>
          <h2>Web Developer</h2>
          {renderText(`about`)}
        </div>
      );
    case "project-details":
      return (
        <div className={`hero-text ${layout}`}>
          <h1>Project Title</h1>
          <p>Project Description</p>
        </div>
      );
    default:
      return <h1>No text found for {layout}</h1>;
  }
};
