import React, { useState, useEffect } from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";
import ProjectCard from "../ProjectsSection/ProjectCard/ProjectCard";

import "./css/projects-section.css";
import { MainButton } from "../MainButton/MainButton";

export default function ProjectsSection({ projects, layout }) {
  const [currentView, setCurrentView] = useState("Websites");
  const [cardWidth, setCardWidth] = useState(0);

  const sectionStyle = {
    maxWidth: cardWidth
  };

  if (layout === "slider") {
    sectionStyle.maxWidth = cardWidth;
  } else {
    sectionStyle.maxWidth = "unset";
  }

  const changeCurrentView = view => {
    if (currentView !== view) {
      setCurrentView(view);
    }
  };

  useEffect(() => {
    if (layout === "slider") {
      setCardWidth(
        document.querySelector(".project-card-container").offsetWidth
      );
    }
  }, [sectionStyle]);

  useEffect(() => {
    const el = document.querySelector(".projects-container");
    if (layout === "slider") {
      el.addEventListener("mousemove", e => {
        el.style.left = `-${e.clientX}px`;
      });
    }
  });

  return (
    <div className={`projects-section ${layout}`} style={sectionStyle}>
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
      <ProjectsDisplay layout={layout}>
        <div className="projects-container">
          {/* style={{ left: `-${perc}px` }} */}
          {projects.map(project => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </ProjectsDisplay>
    </div>
  );
}
