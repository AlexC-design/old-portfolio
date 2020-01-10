import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./navbar.css";

class Navbar extends Component {
  pathCheck = path =>
    this.props.location.pathname === path ? "active" : "inactive";

  pathToProject = () => {
    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/about"
    ) {
      return "primary";
    } else {
      return this.props.location.pathname.replace("/", "");
    }
  };

  render() {
    return (
      <div className="navbar-container">
        <ul className={`navbar ${this.pathToProject()}`}>
          <Link to="/" className={`navbar-link ${this.pathCheck("/")}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${this.pathCheck("/about")}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`navbar-link ${this.pathCheck("/contact")}`}
          >
            Contact
          </Link>
        </ul>
      </div>
    );
  }
}

const wrappedComponent = withRouter(Navbar);

export default wrappedComponent;
