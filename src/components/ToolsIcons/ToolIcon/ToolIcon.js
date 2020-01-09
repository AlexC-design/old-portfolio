import React from "react";

import "./tool-icon.css";

export const ToolIcon = ({ icon }) => {
  return (
    <div className="tool-icon">
      <p>Tool Name</p>
      <img src={icon} alt={`${icon} icon`} />
    </div>
  );
};
