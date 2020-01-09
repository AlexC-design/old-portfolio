import React, { Component } from "react";

import "./project-card.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className={`project-card-container ${this.props.project.name}`}>
        <div className="project-card-top">
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
    );
  }
}
