import React from "react";
import { ProjectImages } from "./ProjectImages/ProjectImages";
import { ProjectVideo } from "./ProjectVideo/ProjectVideo";

import "./project-content.css";

export const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      <ProjectImages
        projectName={project.name}
        projectImages={project.processImages}
      />

      {project.videos && <ProjectVideo url={project.videos[0]} />}
    </div>
  );
};
