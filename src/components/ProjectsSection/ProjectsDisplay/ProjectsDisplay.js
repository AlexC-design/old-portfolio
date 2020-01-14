import React, { useState, useEffect } from "react";

import "./projects-display.css";

export const ProjectsDisplay = ({ children, layout }) => {
  const [cardHeight, setCardHeight] = useState("unset");

  useEffect(() => {
    const setHeigth = () => {
      if (layout === "slider") {
        setCardHeight(
          document.querySelector(".project-card-container").offsetHeight
        );
      } else {
        setCardHeight("unset");
      }
    };

    setTimeout(setHeigth, 0);
  });

  return (
    <div
      className={`projects-display ${layout}`}
      style={{ height: cardHeight }}
    >
      {children}
    </div>
  );
};
