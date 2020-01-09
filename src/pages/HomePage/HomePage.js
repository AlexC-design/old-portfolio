import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import { HeroText } from "../../components/HeroText/HeroText";
import { HeroImage } from "../../components/HeroImage/HeroImage";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Hero color={`primary`}>
          <HeroText layout={`personal-details`} />
          <HeroImage />
        </Hero>
      </div>
    );
  }
}
