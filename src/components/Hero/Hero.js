import React, { Component } from "react";

import "./hero.css";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  render() {
    return (
      <div className={`hero-container ${this.state.color}`}>
        {this.props.children}
      </div>
    );
  }
}
