import React from "react";

import "./projects-display.css";

export const ProjectsDisplay = props => {
  return (
    <div className={`projects-display ${props.layout}`}>{props.children}</div>
  );
};
