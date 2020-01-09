import React from "react";
import gitHubIcon from "../../assets/icons/github-icon.svg";

export const buttonIcon = icon => {
  switch (icon) {
    case "live":
      return <div className="live-icon" />;
    case "github":
      return <img src={gitHubIcon} alt="github icon" />;
    case 0:
      return <></>;
    default:
      return <p>no icon found for {icon || '_'}</p>;
  }
};