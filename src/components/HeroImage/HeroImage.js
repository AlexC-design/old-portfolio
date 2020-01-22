import React from "react";
import ImageSlideshow from "../../components/ProjectsSection/ProjectCard/ImageSlideshow/ImageSlideshow";
import profilePhoto from "../../assets/profile-photo.jpg";

import "./hero-image.css";

export const HeroImage = ({ projectImages }) => {
  return (
    <div className={`project-image-container ${projectImages ? "" : "about"}`}>
      {projectImages ? (
        <ImageSlideshow projectImages={projectImages} />
      ) : (
        <div className="about-photo">
          <img src={profilePhoto} alt="about" />
        </div>
      )}
    </div>
  );
};
