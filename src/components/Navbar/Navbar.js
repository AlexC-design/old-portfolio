import React, { Component } from "react";

import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar">
          <li>About</li>
          <li>Home</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
