import React, { useState, useEffect } from "react";

import "./projects-display.css";

export const ProjectsDisplay = ({ children, layout }) => {
  const [cardHeight, setCardHeight] = useState(633);

  const displayStyle = {
    height: cardHeight
  };

  if (layout === "slider") {
    displayStyle.height = cardHeight;
  } else {
    displayStyle.height = "unset";
  }

  useEffect(() => {
    const setHeigth = () => {
      if (layout === "slider") {
        setCardHeight(
          document.querySelector(".project-card-container").offsetHeight
        );
      }
    };

    setTimeout(setHeigth, 100);
  });

  return (
    <div className={`projects-display ${layout}`} style={displayStyle}>
      {children}
    </div>
  );
};
