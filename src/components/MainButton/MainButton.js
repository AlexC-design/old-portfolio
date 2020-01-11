import React from "react";
import PropTypes from "prop-types";
import { buttonIcon } from "./buttonIcon";

import "./main-button.css";

export const MainButton = ({ text, color, icon, filled, clickEvent, link }) => {
  console.log(link);
  return (
    <button
      onClick={link ? () => clickEvent(link) : () => clickEvent(text)}
      className={`main-button ${color} ${filled ? "selected" : ""}`}
    >
      <p>{text}</p>
      {!!icon && buttonIcon(icon)}
    </button>
  );
};

MainButton.defaultProps = { filled: true };
MainButton.propTypes = { filled: PropTypes.bool };
