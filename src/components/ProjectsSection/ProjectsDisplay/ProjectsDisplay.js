import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import trackerLogo from "../../../assets/logos/tracker-logo.png";
import trackerGif from "../../../assets/gifs/tracker-gif.png";

import "./projects-display.css";

const project = {
  name: 'tracker',
  logo: trackerLogo,
  gif: trackerGif,
  text:
    "Application that helps teams maintain and manage issues during product development"
};

export const ProjectsDisplay = () => {
  return (
    <div className="projects-display">
      <ProjectCard project={project} />
      <ProjectCard project={project} />
      <ProjectCard project={project} />
      <ProjectCard project={project} />
    </div>
  );
};
