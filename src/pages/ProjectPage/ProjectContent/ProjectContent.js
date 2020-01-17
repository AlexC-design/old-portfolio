import React from "react";
import { ProjectImages } from "./ProjectImages/ProjectImages";

import "./project-content.css";

export const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      <ProjectImages
        projectName={project.name}
        projectImages={project.processImages}
      />
    </div>
  );
};
