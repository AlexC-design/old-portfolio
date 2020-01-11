import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroText } from "../../components/HeroText/HeroText";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

import projects from "../../projects";
import { ToolsIcons } from "../../components/ToolsIcons/ToolsIcons";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero page={`home`}>
          <HeroText layout={`personal-details`} />
          <ToolsIcons color={`yellow`} />
        </Hero>

        <ProjectsSection projects={projects} layout={`grid`} />
      </div>
    );
  }
}
