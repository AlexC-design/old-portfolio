import React from "react";
import { ProjectImages } from "./ProjectImages/ProjectImages";

import "./project-content.css";
import { ProjectText } from "./ProjectText/ProjectText";
import { ProjectVideo } from "./ProjectVideo/ProjectVideo";

export const ProjectContent = ({ project }) => {
  return (
    <div className="project-content">
      {project.projectText && <ProjectText projectText={project.projectText} />}

      <ProjectImages
        projectName={project.name}
        projectImages={project.processImages}
      />
      <div className="project-videos-container">
        {project.videos &&
          project.videos.map(video => {
            return (
              <ProjectVideo
                url={video.url}
                autoplay={video.autoplay}
                controls={video.controls}
                width={video.width}
                height={video.height}
              />
            );
          })}
      </div>
    </div>
  );
};
