import React from "react";

import "./project-text.css";

export const ProjectText = ({ projectText }) => {
  return (
    <div className="project-text-section">
      {projectText.map(text => {
        return (
          <>
            {text.title && <h2 className="text-title">{text.title}</h2>}
            <p className="text-paragraph">{text.paragraph}</p>
          </>
        );
      })}
    </div>
  );
};
