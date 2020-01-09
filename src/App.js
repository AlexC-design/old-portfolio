import React from "react";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { routes } from "./pages/routes/routes";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Navbar />
          {routes()}
        </HashRouter>
      </div>
    );
  }
}
