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
  "tas-sketch2.png",
  "personas.png"
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
    controls: false,
    width: "350",
    heigth: "630"
  },
  {
    url: "loaa-learn.mp4",
    autoplay: true,
    controls: false,
    width: "350",
    heigth: "630"
  },
  {
    url: "loaa-discuss.mp4",
    autoplay: true,
    controls: false,
    width: "350",
    heigth: "630"
  }
];

const loawVideos = [
  {
    url: "loaw-responsive.mp4",
    autoplay: true,
    controls: false,
    width: `${1274 / 3}`,
    heigth: `${890 / 3}`
  },
  {
    url: "loaw-MainPageToDrawScroll.mp4",
    autoplay: true,
    controls: false,
    width: `${1274 / 3}`,
    heigth: `${890 / 3}`
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

const loawText = [
  {
    title: "Project Overview",
    paragraph:
      "Line of action is a website that offers tools, resources and a community for artists looking to improve their craft."
  },
  {
    paragraph:
      "Their main feature is the gesture drawing tool that allows artists to take on study sessions and practice from a pre-selected set of images for a set amount of time."
  },
  {
    paragraph:
      "The website also offers other types of resources, like books, lessons, tips, art-related articles and a community of artists looking to improve and help each other by offering critique, practice advice and sharing the knowledge gained through their learning experience."
  },
  {
    paragraph:
      "Having used their website for a while now, I've noticed it could use some improvements in terms of usability, as well as layout and general aesthetics.So I've decided to take on the challenge of redesigning the website to improve the user experience and to better communicate the brand values"
  },
  {
    title: "Process",
    paragraph:
      "I started by researching the current website architecture and taking notes on the usability issues, while also suggesting possible solutions to the existing problems."
  },
  {
    paragraph:
      "The goal of the changes is to reduce confusion by creating a more intuitive navigation process, enabling the user to access different features of the website with ease."
  },
  {
    paragraph:
      "I started by designing the hero section of the main page, keeping their current logo, and the handwritten style of the logotype, suitable for the brand, but changing it to something a bit more simple and versatile."
  },
  {
    paragraph:
      "Following the design guidelines and styling of the main page, I've redesigned the rest of the pages based on the notes taken during the research phase."
  }
];

const loaaText = [
  {
    title: "Project Overview",
    paragraph:
      "Following the website re-design for Line of action, I've decided to create a mobile app design, as after browsing the 'Support & Suggestions' section of their forums I've noticed there is demand for a mobile version from some of the users."
  },
  {
    paragraph:
      "Additionally, mobile apps offer more features that their service could benefit from and enhance the user's experience, like:"
  },
  {
    paragraph:
      "making use of mobile device features (uploading work for critiques by taking photos directly from the app)"
  },
  {
    paragraph:
      "ease of sending notifications (so that users can quickly get notified when they are receiving feedback on their work and keep the discussion going)"
  },
  {
    paragraph: "ability to work offline"
  },
  {
    paragraph: "better personalization"
  },
  {
    title: "Process",
    paragraph:
      "Having a pretty good idea about all the features that need to be included in the app from doing the research for the website re-design, I started sketching out a basic layout for the main page to help me determine how to organize all of the items to provide the best usability for the mobile layout."
  },
  {
    paragraph:
      "I've chosen the draw tool as the starting page since this will be the main feature of the app, and I've grouped up the similar categories into a single tab to allow for easier and more intuitive navigation."
  },
  {
    paragraph:
      "Having less options presented at a time also helps declutter the UI and reduce the cognitive load on the user, resulting in a more pleasant and engaging experience."
  },
  {
    paragraph:
      "I've then sketched out wireframes for the application's features, creating different variations to help decide what is the best layout in terms of usability."
  },
  {
    paragraph:
      "Finally, I've created the high fidelity UI maintaining visual consistency with the design of the website."
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
    text: "Restaurant reservation app design",
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
    projectText: loawText,
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
    projectText: loaaText,
    description:
      "Designing a mobile app for Line of action - tools and resources for artists looking to improve their work.",
    software: ["ADOBE XD", "FIGMA", "AFTER EFFECTS", "PHOTOSHOP"]
  }
];

export default projects;
