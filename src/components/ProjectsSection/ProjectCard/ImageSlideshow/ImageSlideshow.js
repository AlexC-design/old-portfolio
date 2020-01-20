import React, { Component } from "react";

import "./image-slideshow.css";

export default class ImageSlideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };
  }

  componentDidMount() {
    this.changeImage(this.props.projectImages.length);
  }

  changeImage = imagesLength => {
    if (this.state.currentImage === imagesLength - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }

    this.setTimeoutId = setTimeout(
      () => this.changeImage(imagesLength),
      2000 + Math.floor(Math.random() * 1001)
    );
  };

  componentWillUnmount() {
    clearTimeout(this.setTimeoutId);
  }

  render() {
    return (
      <div className="images-slideshow">
        {this.props.projectImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="slide"
              className={`slideshow-image ${
                index === this.state.currentImage ? "active" : ""
              }`}
            />
          );
        })}
      </div>
    );
  }
}
