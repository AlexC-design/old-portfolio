import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./project-card.css";
import { HoverOverlay } from "./HoverOverlay/HoverOverlay";

export default class ProjectCard extends Component {
  render() {
    return (
      <Link to={`project/${this.props.project.name}`}>
        <div className={`project-card-container ${this.props.project.name}`}>
          <div className="project-card-top">
            <HoverOverlay
              projectName={this.props.project.name}
              mainTech={this.props.project.software}
              secondaryTech={this.props.project.secondarySoftware}
            />
            <div className="logo-container">
              <img
                className="project-logo"
                src={this.props.project.logo}
                alt="project logo"
              />
            </div>
            <img
              className="project-gif"
              src={this.props.project.gif}
              alt="project gif"
            />
          </div>
          <div className="project-card-bottom">
            <h2>{this.props.project.text}</h2>
          </div>
        </div>
      </Link>
    );
  }
}
