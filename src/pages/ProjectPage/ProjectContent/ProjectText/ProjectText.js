import React from "react";

export const ProjectText = ({ title, paragraphs }) => {
  return (
    <div className="project-text-section">
      <h1 className="section-title">{title}</h1>
      {paragraphs.length &&
        paragraphs.map(paragraph => {
          return <p className="section-text">{paragraph}</p>;
        })}
    </div>
  );
};
