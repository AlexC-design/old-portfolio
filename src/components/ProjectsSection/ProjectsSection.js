import React, { useState, useEffect } from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";
import ProjectCard from "../ProjectsSection/ProjectCard/ProjectCard";

import "./css/projects-section.css";
import { MainButton } from "../MainButton/MainButton";

export default function ProjectsSection(props) {
  const [currentView, setCurrentView] = useState("Websites");
  const [cardWidth, setCardWidth] = useState(0);

  const { projects } = props;

  const style = {
    maxWidth: cardWidth
  };
  props.layout === "slider"
    ? (style.maxWidth = cardWidth)
    : (style.maxWidth = "unset");

  const changeCurrentView = view => {
    if (currentView !== view) {
      setCurrentView(view);
    }
  };

  useEffect(() => {
    setCardWidth(document.querySelector(".project-card-container").offsetWidth);
  }, []);

  return (
    <div className={`projects-section ${props.layout}`} style={style}>
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
      <ProjectsDisplay layout={props.layout}>
        {projects.map(project => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsDisplay>
    </div>
  );
}
