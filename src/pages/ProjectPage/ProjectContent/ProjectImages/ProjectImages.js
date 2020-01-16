import React from "react";

import "./project-images.css";

export const ProjectImages = ({ projectName, projectImages }) => {
  return (
    <div
      className="Sirv process-image-container"
      data-effect="zoom"
      data-options="zoom-on-wheel:false; fullscreen-only:true;"
    >
      {projectImages.map(image => {
        return <img data-src={`https://omperiap.sirv.com/${projectName}/${image}`} />;
      })}
    </div>
  );
};
