import React from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";

import './css/projects-section.css'

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <ProjectButtons />
      <ProjectsDisplay />
    </div>
  );
}
