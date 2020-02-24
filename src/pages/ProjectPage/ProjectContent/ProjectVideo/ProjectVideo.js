import React from "react";

import "./project-video.css";

export const ProjectVideo = ({ url, autoplay, controls, width, height }) => {
  return (
    <video
      muted
      className="project-video"
      width={width}
      height={height}
      autoPlay={autoplay}
      controls={controls}
      loop
      preload="metadata"
      poster={`https://omperiap.sirv.com/${url}?thumbnail=${width}`}
    >
      <source src={`https://omperiap.sirv.com/${url}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
