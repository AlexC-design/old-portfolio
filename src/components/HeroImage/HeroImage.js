import React from "react";
import ImageSlideshow from "../../components/ProjectsSection/ProjectCard/ImageSlideshow/ImageSlideshow";
import projects from "../../projects";
import projects2 from "../../projects2";

import "./hero-image.css";

export const HeroImage = ({ projectImages }) => {
  return (
    <div className="project-image-container">
      {projectImages ? (
        <ImageSlideshow projectImages={projectImages} />
      ) : (
        <img className="about-picture" src="" />
      )}
    </div>
  );
};
