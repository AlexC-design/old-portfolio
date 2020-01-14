import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { HeroText } from "../../components/HeroText/HeroText";
import { MainButton } from "../../components/MainButton/MainButton";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ProjectButtons from "../../components/ProjectsSection/ProjectButtons/ProjectButtons";
import projects from "../../projects";

import "./project-page.css";

export default class ProjectPage extends Component {
  linkTo = link => {
    window.open(link, "blank_");
  };

  render() {
    return (
      <div className="project-page">
        <Hero page={`${this.props.match.params.id}`}>
          <HeroText
            layout={`project-details`}
            projectName={`${this.props.match.params.id}`}
          />
          <HeroImage projectName={`${this.props.match.params.id}`} />
        </Hero>
        <div className="project-details-container">
          <ProjectButtons>
            <MainButton
              clickEvent={this.linkTo}
              text="LiveVersion"
              color="dark"
              icon="live"
              link={projects
                .filter(project => project.name === this.props.match.params.id)
                .map(project => project.liveLink)}
            />
            <MainButton
              clickEvent={this.linkTo}
              text="Code"
              color="dark"
              icon="github"
              link={projects
                .filter(project => project.name === this.props.match.params.id)
                .map(project => project.codeLink)}
            />
          </ProjectButtons>
          <div className="placeholder-content"></div>
        </div>
        <ProjectsSection projects={projects} layout={`slider`} />
      </div>
    );
  }
}
