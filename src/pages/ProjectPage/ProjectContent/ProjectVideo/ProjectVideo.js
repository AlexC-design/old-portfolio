import React from "react";

import "./project-video.css";

export const ProjectVideo = ({ url }) => {
  return (
    <video
      className="project-video"
      width="374"
      height="812"
      autoPlay
      loop
      preload="metadata"
      poster={`https://omperiap.sirv.com/${url}`}
    >
      <source
        src="https://omperiap.sirv.com/Take%20a%20seat.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};
