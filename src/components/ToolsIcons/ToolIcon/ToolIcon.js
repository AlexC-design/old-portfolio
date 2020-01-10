import React from "react";

import "./tool-icon.css";

export const ToolIcon = ({ icon, name }) => {
  return (
    <div className="tool-icon">
      <p>{name}</p>
      <img src={icon} alt={`${icon} icon`} />
    </div>
  );
};
