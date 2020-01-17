import React from "react";

import "./projects-display.css";

export const ProjectsDisplay = ({ children, layout }) => {
  return <div className={`projects-display ${layout}`}>{children}</div>;
};
