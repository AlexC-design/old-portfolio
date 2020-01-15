import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { HeroText } from "../../components/HeroText/HeroText";
import { MainButton } from "../../components/MainButton/MainButton";
import { ProjectContent } from "../ProjectPage/ProjectContent/ProjectContent";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ProjectButtons from "../../components/ProjectsSection/ProjectButtons/ProjectButtons";
import projects from "../../projects";
import projects2 from "../../projects2";

import "./project-page.css";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      currentProject:
        projects.find(project => project.name === id) ||
        projects2.find(project => project.name === id)
    };
  }

  componentDidUpdate() {
    const { id } = this.props.match.params;

    if (id !== this.state.currentProject.name) {
      this.setState({
        currentProject:
          projects.find(project => project.name === id) ||
          projects2.find(project => project.name === id)
      });
    }
  }

  linkTo = link => {
    window.open(link, "blank_");
  };

  render() {
    const { id } = this.props.match.params;
    const { currentProject } = this.state;

    return (
      <div className="project-page">
        <Hero page={`${id}`}>
          <HeroText
            layout={`project-details`}
            projectTitle={currentProject.title}
            projectDescription={currentProject.description}
          />
          <HeroImage projectImages={currentProject.sliderImages} />
        </Hero>
        <div className="project-details-container">
          {projects.find(project => project.name === id) && (
            <ProjectButtons>
              <MainButton
                clickEvent={this.linkTo}
                text="LiveVersion"
                color="dark"
                icon="live"
                link={currentProject.liveLink}
              />
              <MainButton
                clickEvent={this.linkTo}
                text="Code"
                color="dark"
                icon="github"
                link={currentProject.codeLink}
              />
            </ProjectButtons>
          )}
          <ProjectContent />
        </div>
        <ProjectsSection layout={`slider`} />
      </div>
    );
  }
}
