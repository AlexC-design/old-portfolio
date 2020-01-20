import React from "react";
import { ProjectImages } from "./ProjectImages/ProjectImages";

import "./project-content.css";
import { ProjectText } from "./ProjectText/ProjectText";

export const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      {project.projectText && <ProjectText projectText={project.projectText} />}

      <ProjectImages
        projectName={project.name}
        projectImages={project.processImages}
      />
    </div>
  );
};
