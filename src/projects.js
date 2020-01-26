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
const trackerProcess = [
  "final-design.png",
  "tracker-sketch.jpg",
  "tracker-text.png"
];

const clusterText = [
  {
    title: "Technologies used",
    paragraph: "React, Redux, Redux-thunk, TMDb API, Axios, HTML/CSS, Sass"
  },
  {
    title: "Project Overview",
    paragraph:
      "The purpose of the project was to build a more complex website with React to practice using Redux. I also wanted to work with CSS more, because I enjoyed it. I took the time to write my own CSS and learn more about it. "
  },
  {
    paragraph:
      "This project also served as a good intro to using a routing library. I've initially built the project using Browser Router, but after uploading the project to Github Pages, I ran into routing issues. That's why I decided to refactor the app to use Hash Router instead."
  },
  {
    paragraph:
      "Building this project was also an exercise in integrating third-party libraries, like simplebar-react. I used this because it was an easier way to reach the desired visual effect for the page's scrollbar."
  },
  {
    title: "Process",
    paragraph:
      "I started by sketching out the basic structure of the website on paper and defining all of its components and features, after which I took it into Figma and built a mid-fidelity wireframe. This helped me get a better understanding of the application as a whole and how the code should be structured."
  },
  {
    paragraph:
      "Following that, I defined the visual look of the website and started working on the final design of the application."
  },
  {
    paragraph:
      "I then started to work on the code, keeping notes on the features required and making adjustments throughout the process to prioritise the different features that need implementing based on the complexity and importance."
  }
];

const folioText = [
  {
    title: "Technologies used",
    paragraph: "React, JavaScript, HTML/CSS, Sass"
  },
  {
    title: "Project Overview",
    paragraph:
      "I've built this website in order to showcase the projects I've been working on, but also a practice. Now that I have a clearer understanding of React, I tried to apply all of the lessons I've learned while building previous projects and to focus more on best practices and paying more attention to the structuring of the code. I plan on expanding it further the more projects I build and the better I become when it comes to Web Development."
  },
  {
    paragraph:
      "Given the complexity of the project, I decided I did not need Redux to build it. I didn't feel the need to use Redux, but from the get-go I planned on using React's Context API if the need arose."
  },
  {
    paragraph:
      "When building the project, I've encountered a problem. To be able to zoom on images, I tried to use Sirv, the hosting service I used for the images, by pulling in a script they provided. The script made changes to the DOM and this, in turn, caused React to crash. This was because React was trying to perform an action on an element that had been moved from its place by the script, and it could no longer find it."
  },
  {
    paragraph:
      "A temporary solution I found was to change the logic in my application to avoid the error. This does mean that I am not able to use a feature of the website that I really liked, but I am working on finding a way to fix the issue and bring back the feature."
  }
];

const trackerText = [
  {
    title: "Technologies used",
    paragraph: "React, Redux, Redux-Saga, Enzyme, Jest, OAuth, HTML/CSS, Sass"
  },
  {
    title: "Project Overview",
    paragraph:
      "I started building this project to focus more on applying best practices and the lessons I've learned from my previous projects. I also wanted to try out new technologies like Redux Saga."
  },
  {
    paragraph:
      "I chose Redux Saga instead of Redux Thunk because I like the idea of separating business logic from UI logic. I believe that the way Redux Saga handles side effects in a way that is more in-line with React's Design Principles."
  },
  {
    paragraph:
      "So far I've faced some challenges using Google's authentication service together with Redux Saga. One of the issues was that I had to find a way to get the authentication events from the service into Redux Saga. The solution I found was to use event channels to achieve the desired result."
  },
  {
    paragraph:
      "I also took a keen interest in testing. In other projects, I either skipped testing altogether or wrote tests afterwards. Here I am trying to apply TDD principles using Enzyme and Jest."
  },
  {
    paragraph:
      "This project is still in progress, but I'm taking my time, as I want to focus more on quality."
  }
];

const primalText = [
  {
    title: "Technologies used",
    paragraph: "React, HTML/CSS, Sass"
  },
  {
    title: "Project Overview",
    paragraph:
      "The purpose of the project was to build a responsive landing page to practice using React."
  },
  {
    paragraph:
      "Given the low complexity of the project from a technical point of view, I decided to also focus more on the styling of the website, as it would be a good opportunity to practice basic CSS concepts as well."
  },
  {
    paragraph:
      "Some of the challenges I've faced during this project arose from my underestimation of how easy it would be to translate the design I've created into the actual website. This turned out to be more complex than I was expecting, but in the end, I managed to achieve the desired result and it was a very good learning experience."
  },
  {
    title: "Process",
    paragraph:
      "I started by sketching the basic structure of the website on paper and defining the main sections. Next, I started defining the visual style of the website and building the website design in Figma"
  },
  {
    paragraph:
      "This was the first project I've built from scratch using React. I knew it's a component-based library so I tried organizing my code into components. I also tried to follow some of the more abstract good practice principles like KISS and DRY. Even so, looking back, there are a lot of things I could have done much better."
  },
  {
    paragraph:
      "This was also the first time I used Sass to handle the styling of the website. After using it and learning more, I'm beginning to understand more clearly why there is a payoff in deciding on a good and maintainable structure from the start."
  }
];

const projects = [
  {
    name: "cluster",
    title: "Movie Cluster",
    logo: movieClusterLogo,
    sliderImages: clusterSlider,
    processImages: clusterProcess,
    text:
      "Movie browsing website - discover top rated movies, find out what’s trending, watch trailers and more",
    projectText: clusterText,
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
    liveLink: "https://alexc-design.github.io/movie-cluster/#/",
    codeLink: "https://github.com/AlexC-design/movie-cluster"
  },
  {
    name: "folio",
    title: "Personal Portfolio Website",
    logo: portfolioLogo,
    sliderImages: folioSlider,
    processImages: folioProcess,
    text: "Personal portfolio website showcasing some of my projects",
    projectText: folioText,
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
    projectText: trackerText,
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
    projectText: primalText,
    description:
      "Designing and building a responsive landing page for a fitness gym using React.",
    software: ["REACT", "HTML/CSS", "JAVASCRIPT"],
    secondarySoftware: ["Figma", "Photoshop", "Illustrator"],
    liveLink: "https://alexc-design.github.io/primal-gym/",
    codeLink: "https://github.com/AlexC-design/primal-gym"
  }
];

export default projects;
