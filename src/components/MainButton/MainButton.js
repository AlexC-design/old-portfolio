import React from "react";
import { buttonIcon } from "./buttonIcon";

import "./main-button.css";

export const MainButton = ({ text, color, icon }) => {
  return (
    <button className={`main-button ${color}`}>
      {text}
      {icon !== 0 && buttonIcon(icon)}
    </button>
  );
};
