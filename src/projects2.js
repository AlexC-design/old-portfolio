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

const tasText = [
  {
    title: "Project Overview",
    paragraph:
      "Design a mobile app that allows the user to find restaurants, cafes or pubs nearby and make reservations."
  },
  {
    paragraph:
      "The user will be able to find restaurants either searching for them by name or address, or by finding them on the map."
  },
  {
    paragraph:
      "The reservation process will be aided by a graphical layout display of the establishment."
  },
  {
    paragraph:
      "The user will be able to select their prefered table, date and time, as well as seeing which tables are booked at a specific time."
  },
  {
    title: "Objective",
    paragraph:
      "The goal​ is to increase the number of costumers by facilitating the reservation process."
  },
  {
    paragraph:
      "Through the use of a graphical display of the restaurant's layout, the process of finding a restaurant and reserving a table becomes simple and effortless."
  },
  {
    title: "Process",
    paragraph:
      "After gathering feedback from user research by interviewing potential users of the service, I've summarized the key findings into user personas."
  },
  {
    paragraph:
      "Using the information gathered I've established the navigation taxonomy and sketched out the application map to determine the structure of the application"
  },
  {
    paragraph:
      "Next, I've created wireframe designs for each page, outlining the relation between pages and a general user flow, followed by the high fidelity prototype."
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
    projectText: tasText,
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
