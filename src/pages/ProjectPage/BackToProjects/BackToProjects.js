import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./back-to-projects.css";

const BackToProjects = ({ history }) => {
  const scroll = () => {
    history.push("/");

    setTimeout(
      () =>
        window.scrollTo({
          top: document.querySelector(".projects-section").offsetTop,
          behavior: "smooth"
        }),
      200
    );
  };

  return (
    <div className="back-button-container">
      <button onClick={scroll} className="back-button">
        Back to projects
      </button>
    </div>
  );
};

export default withRouter(BackToProjects);
