import React, { useState, useEffect } from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";
import ProjectCard from "../ProjectsSection/ProjectCard/ProjectCard";

import "./css/projects-section.css";
import { MainButton } from "../MainButton/MainButton";

export default function ProjectsSection(props) {
  const [currentView, setCurrentView] = useState("Websites");

  const { projects } = props;

  const changeCurrentView = view => {
    if (currentView !== view) {
      setCurrentView(view);
    }
  };

  console.log(currentView);

  return (
    <div className="projects-section">
      <ProjectButtons>
        <MainButton
          clickEvent={changeCurrentView}
          text="Websites"
          color="primary"
          filled={currentView === "Websites" ? true : false}
        />
        <MainButton
          clickEvent={changeCurrentView}
          text="UI / UX"
          color="primary"
          filled={currentView === "UI / UX" ? true : false}
        />
      </ProjectButtons>
      <ProjectsDisplay>
        {projects.map(project => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsDisplay>
    </div>
  );
}
