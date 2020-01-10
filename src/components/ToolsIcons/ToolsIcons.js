import React from "react";
import { ToolIcon } from "./ToolIcon/ToolIcon";
import { tools } from "./tools";

import "./tools-icons.css";

export const ToolsIcons = () => {
  return (
    <div className="tools-icons-container">
      {tools.map(tool => (
        <ToolIcon icon={tool.icon} name={tool.name} />
      ))}
    </div>
  );
};
