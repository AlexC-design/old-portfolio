import React from "react";
import PropTypes from "prop-types";
import { buttonIcon } from "./buttonIcon";

import "./main-button.css";

export const MainButton = ({ text, color, icon, filled }) => {
  return (
    <button className={`main-button ${color} ${filled ? "selected" : ""}`}>
      <p>{text}</p>
      {!!icon && buttonIcon(icon)}
    </button>
  );
};

MainButton.defaultProps = { filled: true };
MainButton.propTypes = { filled: PropTypes.bool };
