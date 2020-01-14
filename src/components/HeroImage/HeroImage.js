import React from "react";
import ImageSlideshow from "../../components/ProjectsSection/ProjectCard/ImageSlideshow/ImageSlideshow";
import projects from "../../projects";
import projects2 from "../../projects2";

import "./hero-image.css";

export const HeroImage = ({ projectName }) => {
  return (
    <div className="project-image-container">
      {projectName ? (
        <ImageSlideshow
          project={
            projects.find(project => project.name === projectName) ||
            projects2.find(project => project.name === projectName)
          }
        />
      ) : (
        <img className="about-picture" src="" />
      )}
    </div>
  );
};
