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
    name: "tracker",
    logo: trackerLogo,
    gif: trackerGif,
    text:
      "Application that helps teams maintain and manage issues during product development",
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
    name: "cluster",
    logo: movieClusterLogo,
    gif: trackerGif,
    text:
      "Movie browsing website - discover top rated movies, find out what’s trending, watch trailers and more",
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
    name: "primal",
    logo: primalGymLogo,
    gif: trackerGif,
    text: "Fitness Gym Landing Page",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  },
  {
    name: "folio",
    logo: portfolioLogo,
    gif: trackerGif,
    text: "Personal portfolio website showcasing some of my projects",
    software: ["REACT", "REACT-ROUTER", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"]
  }
];

export default projects;
