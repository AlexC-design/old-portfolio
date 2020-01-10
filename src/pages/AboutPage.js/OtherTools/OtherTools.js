import React from "react";

import "./other-tools.css";

export const OtherTools = ({ tools, title }) => {
  return (
    <div className="other-tools">
      <h2>{title}</h2>
      <div className="other-tools-names">
        {tools.map(name => (
          <div>{name}</div>
        ))}
      </div>
    </div>
  );
};
