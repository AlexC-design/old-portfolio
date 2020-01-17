import loaaLogo from "./assets/logos/line-of-action-app-logo.png";
import loawLogo from "./assets/logos/line-of-action-website-logo.png";
import tasLogo from "./assets/logos/take-a-seat-logo.png";

import loaaSlide1 from "./assets/slideshow/loaa/loaa1.png";
import loaaSlide2 from "./assets/slideshow/loaa/loaa2.png";
import loaaSlide3 from "./assets/slideshow/loaa/loaa3.png";

import loawSlide1 from "./assets/slideshow/loaw/loaw1.png";
import loawSlide2 from "./assets/slideshow/loaw/loaw2.png";
import loawSlide3 from "./assets/slideshow/loaw/loaw3.png";

import tasSlide1 from "./assets/slideshow/tas/tas1.png";
import tasSlide2 from "./assets/slideshow/tas/tas2.png";
import tasSlide3 from "./assets/slideshow/tas/tas3.png";

const loaaSlider = [loaaSlide1, loaaSlide2, loaaSlide3];
const loawSlider = [loawSlide1, loawSlide2, loawSlide3];
const tasSlider = [tasSlide1, tasSlide2, tasSlide3];

const loaaProcess = ["loaa-final-design.png", "loaa-sketch1.jpg"];
const loawProcess = ["loaw-final-design.png", "loaw-sketch1.png"];
const tasProcess = [
  "tas-final-design.png",
  "tas-sketch1.png",
  "tas-sketch2.png"
];

const tasVideos = [
  {
    url: "tas-flow.mp4",
    autoplay: false,
    controls: true,
    width: "374",
    heigth: "812"
  }
];
const loaaVideos = [
  {
    url: "loaa-flow.mp4",
    autoplay: true,
    controls: true,
    width: "350",
    heigth: "630"
  },
  {
    url: "loaa-discuss.mp4",
    autoplay: true,
    controls: true,
    width: "350",
    heigth: "630"
  },
  {
    url: "loaa-learn.mp4",
    autoplay: true,
    controls: true,
    width: "350",
    heigth: "630"
  }
];

const loawVideos = [
  {
    url: "loaw-resonsize.mp4",
    autoplay: false,
    controls: true,
    width: `${1680 / 2}`,
    heigth: `${1200 / 2}`
  },
  {
    url: "loaw-resonsize.mp4",
    autoplay: false,
    controls: true,
    width: `${1274 / 2}`,
    heigth: `${890 / 2}`
  }
];

const projects = [
  {
    name: "tas",
    title: "Take a seat",
    logo: tasLogo,
    sliderImages: tasSlider,
    processImages: tasProcess,
    videos: tasVideos,
    text: "Restaurant reservation app deisgn",
    description:
      "Designing a mobile app that facilitates the process of restaurant reservations through the use of graphical layouts.",
    software: ["ADOBE XD", "FIGMA", "AFTER EFFECTS", "PHOTOSHOP"]
  },
  {
    name: "loaw",
    title: "Line of action - Website Redesign",
    logo: loawLogo,
    sliderImages: loawSlider,
    processImages: loawProcess,
    videos: loawVideos,
    text: "Redesigning 'Line of Action' website",
    description:
      "Website redesign for Line of action - tools and resource for artists looking to improve their work.",
    software: ["ADOBE XD", "FIGMA", "AFTER EFFECTS", "PHOTOSHOP"]
  },
  {
    name: "loaa",
    title: "Line of action - Mobile Application",
    logo: loaaLogo,
    sliderImages: loaaSlider,
    processImages: loaaProcess,
    videos: loaaVideos,
    text:
      "Application design for Line of action - tools and resources for artists looking to improve their work",
    description:
      "Designing a mobile app for Line of action - tools and resources for artists looking to improve their work.",
    software: ["ADOBE XD", "FIGMA", "AFTER EFFECTS", "PHOTOSHOP"]
  }
];

export default projects;
