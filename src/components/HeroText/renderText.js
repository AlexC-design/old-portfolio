import React from "react";

export const renderText = page => {
  switch (page) {
    case "home":
      return (
        <>
          <p>
            Hi!
            <br />
            I'm Alex, a London based Web Developer with a background in Digital
            Art and Design.
          </p>
          <p>Have look at some of my work below!</p>
        </>
      );
    case "about":
      return (
        <>
          <p>
            Hi!
            <br />
            I'm Alex, a Web Developer with a background in Digital Art and
            Design.
          </p>
          <p>
            I have been working as a concept artist and illustrator in the video
            game industry until recently and I am now looking to get back into
            Web Development.
          </p>
          <p>
            I've studied Computer Science at the University of Bucharest, and
            for the past year, I've been focusing on Web Technologies and
            Frameworks.
          </p>
          <p>
            If you want to check out some of my previous work as a digital
            artist visit:{" "}
            <a
              href="https://allexc.crevado.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              allexc.crevado.com
            </a>
          </p>
        </>
      );
    default:
      return <p>text not found</p>;
  }
};
