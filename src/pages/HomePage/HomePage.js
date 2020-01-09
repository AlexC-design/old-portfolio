import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroText } from "../../components/HeroText/HeroText";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { MainButton } from "../../components/MainButton/MainButton";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero color={`primary`}>
          <HeroText layout={`personal-details`} />
          <HeroImage />
        </Hero>
        <MainButton text="Websites" color="primary" selectable={true} />
        <MainButton text="Websites" color="primary" selectable={true} />
        <MainButton text="Websites" color="primary" selectable={false} />
        <MainButton text="Websites" color="primary" selectable={false} />

        <ProjectsSection />
      </div>
    );
  }
}
