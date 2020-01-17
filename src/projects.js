import trackerLogo from "./assets/logos/tracker-logo.png";
import movieClusterLogo from "./assets/logos/movie-cluster-logo.png";
import primalGymLogo from "./assets/logos/primal-gym-logo.png";
import portfolioLogo from "./assets/logos/portfolio-logo.png";

import clusterSlide1 from "./assets/slideshow/cluster/mc1.png";
import clusterSlide2 from "./assets/slideshow/cluster/mc2.png";
import clusterSlide3 from "./assets/slideshow/cluster/mc3.png";
import clusterSlide4 from "./assets/slideshow/cluster/mc4.png";

import trackerSlide1 from "./assets/slideshow/tracker/tr1.png";
import trackerSlide2 from "./assets/slideshow/tracker/tr2.png";
import trackerSlide3 from "./assets/slideshow/tracker/tr3.png";
import trackerSlide4 from "./assets/slideshow/tracker/tr4.png";

import folioSlide1 from "./assets/slideshow/folio/fo1.png";
import folioSlide2 from "./assets/slideshow/folio/fo2.png";
import folioSlide3 from "./assets/slideshow/folio/fo3.png";
import folioSlide4 from "./assets/slideshow/folio/fo4.png";

import primalSlide1 from "./assets/slideshow/primal/pg1.png";
import primalSlide2 from "./assets/slideshow/primal/pg2.png";
import primalSlide3 from "./assets/slideshow/primal/pg3.png";
import primalSlide4 from "./assets/slideshow/primal/pg4.png";

const clusterSlider = [
  clusterSlide1,
  clusterSlide2,
  clusterSlide3,
  clusterSlide4
];
const trackerSlider = [
  trackerSlide1,
  trackerSlide2,
  trackerSlide3,
  trackerSlide4
];
const folioSlider = [folioSlide1, folioSlide2, folioSlide3, folioSlide4];
const primalSlider = [primalSlide1, primalSlide2, primalSlide3, primalSlide4];

const clusterProcess = [
  "mid-fid.png",
  "final-design.png",
  "mc-sketch1.jpg",
  "mc-sketch2.jpg",
  "mc-sketch3.jpg"
];
const folioProcess = [
  "folio-final-deisgn.png",
  "folio-sketches.png",
  "folio-variations.png"
];
const primalProcess = ["pg-final.png", "pg-sketch1.jpg"];
const trackerProcess = ["final-design.png"];

const projects = [
  {
    name: "cluster",
    title: "Movie Cluster",
    logo: movieClusterLogo,
    sliderImages: clusterSlider,
    processImages: clusterProcess,
    videos: ["Take%20a%20seat.mp4?thumbnail=374"],
    text:
      "Movie browsing website - discover top rated movies, find out what’s trending, watch trailers and more",
    description:
      "Building a website using React and Redux that allows users to browse movies by name, discover latest trending movies, top rated movies and find out details about the movies.",
    software: [
      "REACT",
      "REDUX",
      "REDUX-THUNK",
      "REACT-ROUTER",
      "HTML/CSS",
      "JAVASCRIPT"
    ],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/movie-cluster",
    codeLink: "https://github.com/AlexC-design/movie-cluster"
  },
  {
    name: "folio",
    title: "Personal Portfolio Website",
    logo: portfolioLogo,
    sliderImages: folioSlider,
    processImages: folioProcess,
    text: "Personal portfolio website showcasing some of my projects",
    description:
      "Building a personal portfolio website using React to showcase some of my coding and design projects",
    software: ["REACT", "REACT-ROUTER", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "",
    codeLink: "https://github.com/AlexC-design/portfolio-website"
  },
  {
    name: "tracker",
    title: "Bug Tracker",
    logo: trackerLogo,
    sliderImages: trackerSlider,
    processImages: trackerProcess,
    text:
      "Application that helps teams maintain and manage issues during product development",
    description:
      "Creating a system that contributes to the Development of a Project by managing and maintaining a List of development related Issues.",
    software: [
      "REACT",
      "REDUX",
      "REDUX-SAGA",
      "REACT-ROUTER",
      "HTML/CSS",
      "JAVASCRIPT"
    ],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/bug-tracker/",
    codeLink: "https://github.com/AlexC-design/bug-tracker"
  },

  {
    name: "primal",
    title: "Primal Gym Website",
    logo: primalGymLogo,
    sliderImages: primalSlider,
    processImages: primalProcess,
    text: "Fitness Gym Landing Page",
    description: "Building a fitness gym Landing Page using React.",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/primal-gym/",
    codeLink: "https://github.com/AlexC-design/primal-gym"
  }
];

export default projects;
