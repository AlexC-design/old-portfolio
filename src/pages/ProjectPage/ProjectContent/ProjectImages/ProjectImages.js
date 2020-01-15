import React from "react";

export const ProjectImages = ({ projectImages }) => {
  return (
    <div className="images-section">
      {projectImages.map(image => {
        return <img src={image} alt="project" />;
      })}
    </div>
  );
};
