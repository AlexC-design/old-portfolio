import React, { Component } from "react";

import "./hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className={`hero-container ${this.props.color}`}>
        <div className="hero-content">{this.props.children}</div>
      </div>
    );
  }
}
