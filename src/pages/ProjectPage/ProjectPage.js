import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { HeroText } from "../../components/HeroText/HeroText";

import "./project-page.css";

export default class ProjectPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="project-page">
        <Hero page={`${this.props.match.params.id}`}>
          <HeroText
            layout={`project-details`}
            projectName={`${this.props.match.params.id}`}
          />
          <HeroImage />
        </Hero>
        <div className="placeholder-section-container">
          <div className="placeholder-content"></div>
        </div>
      </div>
    );
  }
}
