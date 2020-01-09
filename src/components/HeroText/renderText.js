import React from "react";

export const renderText = page => {
  switch (page) {
    case "home":
      return (
        <>
          <p>
            Hi,<br></br> I'm Alex, a London based Web Developer with a
            background in Digital Art and Design.
          </p>
          <p>Have look at some of my work below!</p>
        </>
      );
    case "about":
      return (
        <>
          <p>
            Hi! I'm Alex, a Web Developer with a background in Digital Art and
            Design.
          </p>
          <p>
            I am originally from Romania, but currently looking for work
            opportunities in London.
          </p>
          <p>
            I have been working as a freelance concept artist and illustrator in
            the video game industry for the past 4+ years and I am now looking
            to switch carreers to Web Development.
          </p>
          <p>
            You can see some of my concept art and illustration work in my
            previous portfolio at{" "}
            <a href="https://allexc.crevado.com/" target="_blank">
              allexc.crevado.com
            </a>
          </p>
        </>
      );
    default:
      return <p>text not found</p>;
  }
};
