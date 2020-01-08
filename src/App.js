import React from "react";
import Navbar from "./components/Navbar/Navbar";

import "./css/app.css";
import Hero from "./components/Hero/Hero";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
}
