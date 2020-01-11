import trackerLogo from "./assets/logos/tracker-logo.png";
import trackerGif from "./assets/gifs/tracker-gif.png";
import movieClusterLogo from "./assets/logos/movie-cluster-logo.png";
// import movieClusterGif from "./assets/gifs/movie-cluster-gif.png";
import primalGymLogo from "./assets/logos/primal-gym-logo.png";
// import primalGymGif from "./assets/gifs/primal-gym-gif.png";
import portfolioLogo from "./assets/logos/portfolio-logo.png";
// import portfolioGif from "./assets/gifs/portfolio-gif.png";

const projects = [
  {
    name: "cluster",
    title: "Movie Cluster",
    logo: movieClusterLogo,
    gif: trackerGif,
    text:
      "Movie browsing website - discover top rated movies, find out what’s trending, watch trailers and more",
    desciption:
      "Building a website using React and Redux that allows users to browse movies by name, discover latest trending movies, top rated movies and find out details about the movies.",
    software: [
      "REACT",
      "REDUX",
      "REDUX-THUNK",
      "REACT-ROUTER",
      "HTML/CSS",
      "JAVASCRIPT"
    ],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  },
  {
    name: "folio",
    title: "Personal Portfolio Website",
    logo: portfolioLogo,
    gif: trackerGif,
    text: "Personal portfolio website showcasing some of my projects",
    desciption:
      "Building a personal portfolio website using React to showcase some of my coding and design projects",
    software: ["REACT", "REACT-ROUTER", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  },
  {
    name: "tracker",
    title: "Bug Tracker",
    logo: trackerLogo,
    gif: trackerGif,
    text:
      "Application that helps teams maintain and manage issues during product development",
    desciption:
      "Creating a system that contributes to the Development of a Project by managing and maintaining a List of development related Issues.",
    software: [
      "REACT",
      "REDUX",
      "REDUX-SAGA",
      "REACT-ROUTER",
      "HTML/CSS",
      "JAVASCRIPT"
    ],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  },

  {
    name: "primal",
    title: "Primal Gym Website",
    logo: primalGymLogo,
    gif: trackerGif,
    text: "Fitness Gym Landing Page",
    desciption: "Building a fitness gym Landing Page using React.",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  }
];

export default projects;
