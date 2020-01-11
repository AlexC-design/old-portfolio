import React from "react";

import "./tool-icon.css";

export const ToolIcon = ({ icon, name, color }) => {
  return (
    <div className="tool-icon">
      <p className={`tool-name ${color}`}>{name}</p>
      <img className={`filter-${color}`} src={icon} alt={`${icon} icon`} />
    </div>
  );
};
