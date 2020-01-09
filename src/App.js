import React from "react";
import Navbar from "./components/Navbar/Navbar";

import "./css/app.css";
import Hero from "./components/Hero/Hero";
import { HeroText } from "./components/HeroText/HeroText";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero color={`primary`}>
          <HeroText layout={`personal-details`} />
        </Hero>
      </div>
    );
  }
}
