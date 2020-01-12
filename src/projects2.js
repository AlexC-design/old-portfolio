import trackerLogo from "./assets/logos/tracker-logo.png";
import trackerGif from "./assets/gifs/tracker-gif.png";
import movieClusterLogo from "./assets/logos/movie-cluster-logo.png";
// import movieClusterGif from "./assets/gifs/movie-cluster-gif.png";
import primalGymLogo from "./assets/logos/primal-gym-logo.png";
// import primalGymGif from "./assets/gifs/primal-gym-gif.png";
import portfolioLogo from "./assets/logos/portfolio-logo.png";
// import portfolioGif from "./assets/gifs/portfolio-gif.png";

const projects2 = [
  {
    name: "folio",
    title: "Personal Portfolio Website 2",
    logo: portfolioLogo,
    gif: trackerGif,
    text: "2 Personal portfolio website showcasing some of my projects",
    description:
      "Building a personal portfolio website using React to showcase some of my coding and design projects",
    software: ["REACT", "REACT-ROUTER", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "",
    codeLink: "https://github.com/AlexC-design/portfolio-website"
  },
  {
    name: "tracker",
    title: "Bug Tracker 2",
    logo: trackerLogo,
    gif: trackerGif,
    text:
      "2 Application that helps teams maintain and manage issues during product development",
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
    name: "cluster",
    title: "Movie Cluster 2",
    logo: movieClusterLogo,
    gif: trackerGif,
    text:
      "2 Movie browsing website - discover top rated movies, find out what’s trending, watch trailers and more",
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
    name: "primal",
    title: "Primal Gym Website 2",
    logo: primalGymLogo,
    gif: trackerGif,
    text: "2 Fitness Gym Landing Page",
    description: "Building a fitness gym Landing Page using React.",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/primal-gym/",
    codeLink: "https://github.com/AlexC-design/primal-gym"
  }
];

export default projects2;
