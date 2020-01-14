import React, { Component } from "react";

import "./image-slideshow.css";

export default class ImageSlideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageHeight: 278,
      imageWidth: 750,
      currentImage: 0
    };
  }

  componentDidMount() {
    this.changeImage(this.props.project.sliderImages.length);
    setTimeout(this.setSliderSizes, 0);
  }

  setSliderSizes = () => {
    this.setState({
      imageHeight: document.querySelector(".slideshow-image").offsetHeight
    });
    this.setState({
      imageWidth: document.querySelector(".slideshow-image").offsetWidth
    });
  };

  changeImage = imagesLength => {
    if (this.state.currentImage === imagesLength - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }

    setTimeout(
      () => this.changeImage(imagesLength),
      2000 + Math.floor(Math.random() * 1001)
    );
  };

  render() {
    return (
      <div
        className="images-slideshow"
        style={{
          height: `${this.state.imageHeight ? this.state.imageHeight : 278}px`,
          width: `${this.state.imageWidth ? this.state.imageWidth : 750}px`
        }}
      >
        {this.props.project.sliderImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
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
