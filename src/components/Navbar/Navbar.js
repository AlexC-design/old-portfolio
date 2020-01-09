import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "./navbar.css";

class Navbar extends Component {
  pathCheck = path =>
    this.props.location.pathname === path ? "active" : "inactive";

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
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
