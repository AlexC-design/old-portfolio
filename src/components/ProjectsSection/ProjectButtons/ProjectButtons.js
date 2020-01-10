import React, { Component } from "react";

import './project-buttons.css'

export default class ProjectButtons extends Component {
  render() {
    return (
      <div className='buttons-container'>
        {this.props.children}
      </div>
    );
  }
}
