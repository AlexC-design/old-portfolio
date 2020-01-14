import trackerLogo from "./assets/logos/tracker-logo.png";
// import trackerGif from "./assets/gifs/cluster-gif.gif";
import movieClusterLogo from "./assets/logos/movie-cluster-logo.png";
// import movieClusterGif from "./assets/gifs/movie-cluster-gif.png";
import primalGymLogo from "./assets/logos/primal-gym-logo.png";
// import primalGymGif from "./assets/gifs/primal-gym-gif.png";
import portfolioLogo from "./assets/logos/portfolio-logo.png";
// import portfolioGif from "./assets/gifs/portfolio-gif.png";

import clusterslide1 from "./assets/cluster/slider/mc1.png";
import clusterslide2 from "./assets/cluster/slider/mc2.png";
import clusterslide3 from "./assets/cluster/slider/mc3.png";
import clusterslide4 from "./assets/cluster/slider/mc4.png";

const clusterSlider = [
  clusterslide1,
  clusterslide2,
  clusterslide3,
  clusterslide4
];

const projects = [
  {
    name: "cluster",
    title: "Movie Cluster",
    logo: movieClusterLogo,
    // gif: trackerGif,
    sliderImages: clusterSlider,
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
    // gif: trackerGif,
    sliderImages: clusterSlider,
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
    // gif: trackerGif,
    sliderImages: clusterSlider,
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
    // gif: trackerGif,
    sliderImages: clusterSlider,
    text: "Fitness Gym Landing Page",
    description: "Building a fitness gym Landing Page using React.",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/primal-gym/",
    codeLink: "https://github.com/AlexC-design/primal-gym"
  }
];

export default projects;
