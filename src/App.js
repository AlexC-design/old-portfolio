import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

import Navbar from "./components/Navbar/Navbar";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Navbar />
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/project/:id" exact component={ProjectPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/contact" exact component={ContactPage} /> */}
        </HashRouter>
      </div>
    );
  }
}
