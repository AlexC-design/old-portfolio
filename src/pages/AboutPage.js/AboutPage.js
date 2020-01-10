import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroText } from "../../components/HeroText/HeroText";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { ToolsIcons } from "../../components/ToolsIcons/ToolsIcons";
import { OtherTools } from "./OtherTools/OtherTools";
import { designTools, codeTools } from "./otherTools";

import "./about-page.css";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero page={`about`}>
          <HeroText layout={`about-details`} />
          <HeroImage />
        </Hero>
        <h1>Tools and Technologies</h1>
        <h1>Main</h1>
        <ToolsIcons />
        <div className="other-tools-section">
          <OtherTools title="Design" tools={designTools} />
          <OtherTools title="Code" tools={codeTools} />
        </div>
      </div>
    );
  }
}
