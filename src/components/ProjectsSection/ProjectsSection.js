import React from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";
import ProjectCard from "../ProjectsSection/ProjectCard/ProjectCard";

import "./css/projects-section.css";
import { MainButton } from "../MainButton/MainButton";

export default function ProjectsSection(props) {
  const { projects } = props;

  return (
    <div className="projects-section">
      <ProjectButtons>
        <MainButton text='Websites' color='primary' filled={true} />
        <MainButton text='UI / UX' color='primary' filled={false} />
      </ProjectButtons>
      <ProjectsDisplay>
        {projects.map(project => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsDisplay>
    </div>
  );
}
