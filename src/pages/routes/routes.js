import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export const routes = () => {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/project/:id" exact component={ProjectPage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/contact" exact component={ContactPage} /> */}
    </>
  );
};
