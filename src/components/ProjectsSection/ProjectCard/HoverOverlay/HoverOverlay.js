import React from "react";

import "./hover-overlay.css";

export const HoverOverlay = ({ mainTech, secondaryTech, projectName }) => {
  return (
    <div className={`hover-overlay ${projectName}`}>
      <h3 className="overlay-title">Technologies used:</h3>
      <div className="tech-section">
        {mainTech.map(name => (
          <div className="tech-tab">{name}</div>
        ))}
      </div>
      <div className="tech-section">
        {secondaryTech.map(name => (
          <div className="tech-tab">{name}</div>
        ))}
      </div>
    </div>
  );
};
