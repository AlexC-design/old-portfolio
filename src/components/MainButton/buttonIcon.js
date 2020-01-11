import React from "react";
import gitHubIcon from "../../assets/icons/github-icon.svg";

export const buttonIcon = icon => {
  switch (icon) {
    case "live":
      return <div className="live-icon" />;
    case "github":
      return <img className="github-icon" src={gitHubIcon} alt="github icon" />;
    default:
      return <p>no icon found for {icon || "_"}</p>;
  }
};
