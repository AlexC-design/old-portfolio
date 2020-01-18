import React, { useState, useEffect } from "react";
import ProjectButtons from "./ProjectButtons/ProjectButtons";
import { ProjectsDisplay } from "./ProjectsDisplay/ProjectsDisplay";
import ProjectCard from "../ProjectsSection/ProjectCard/ProjectCard";
import projects from "../../projects";
import projects2 from "../../projects2";

import "./css/projects-section.css";
import { MainButton } from "../MainButton/MainButton";
import { withRouter } from "react-router-dom";

const ProjectsSection = ({ layout, match }) => {
  const [currentView, setCurrentView] = useState("Websites");
  const [cardWidth, setCardWidth] = useState(0);
  const [sliderVisibility, setSliderVisibility] = useState("inline");
  const [currentProjects, setCurrentProjects] = useState(projects);

  const sectionStyle = {
    maxWidth: cardWidth,
    // display: sliderVisibility
  };

  if (layout === "slider") {
    sectionStyle.maxWidth = cardWidth * 2;
  } else {
    sectionStyle.maxWidth = "unset";
  }

  useEffect(() => {
    if (layout === "slider") {
      setCardWidth(
        document.querySelector(".project-card-container").offsetWidth
      );
    }
  }, [layout]);

  useEffect(() => {
    const el = document.querySelector(".projects-container");
    if (layout === "slider") {
      el.addEventListener("mousemove", e => {
        el.style.left = `-${(el.offsetWidth /
          (2 * window.innerWidth - e.clientX)) *
          e.clientX}px`;
      });
    }

    if (window.innerWidth <= 1200 && layout === "slider") {
      setSliderVisibility("none");
    } else {
      setSliderVisibility("flex");
    }
  });

  useEffect(() => {
    document.querySelector(".projects-container").style.left = `-${Math.min(
      window.innerWidth,
      document.querySelector(".projects-container").offsetWidth
    ) /
      currentProjects.length /
      2}px`;
  }, [currentView]);

  const changeCurrentView = view => {
    if (currentView !== view) {
      setCurrentView(view);
      view === "Websites"
        ? setCurrentProjects(projects)
        : setCurrentProjects(projects2);
    }
  };

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
          {currentProjects.map(project => {
            return (
              !(layout === "slider" && project.name === match.params.id) && (
                <ProjectCard project={project} key={project.name} />
              )
            );
          })}
        </div>
      </ProjectsDisplay>
    </div>
  );
};

export default withRouter(ProjectsSection);
