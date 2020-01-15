import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./project-card.css";
import { HoverOverlay } from "./HoverOverlay/HoverOverlay";
import ImageSlideshow from "./ImageSlideshow/ImageSlideshow";

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props;

    return (
      <Link to={`/project/${project.name}`}>
        <div className={`project-card-container ${project.name}`}>
          <div className="project-card-top">
            <HoverOverlay
              projectName={project.name}
              mainTech={project.software}
              secondaryTech={project.secondarySoftware}
            />
            <div className="logo-container">
              <img
                className="project-logo"
                src={project.logo}
                alt="project logo"
              />
            </div>
            <ImageSlideshow projectImages={project.sliderImages} />
          </div>
          <div className="project-card-bottom">
            <h2>{project.text}</h2>
          </div>
        </div>
      </Link>
    );
  }
}
