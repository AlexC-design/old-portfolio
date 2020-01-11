import React from "react";
import mailBox from "../../../assets/icons/contact/mail-box.png";
import mailHandle from "../../../assets/icons/contact/mail-handle.png";

import "./mail-icon.css";

export const MailIcon = () => {
  return (
    <div>
      <div className="mail-icon-container">
        <div className="mail-box-container">
          <img src={mailBox} alt="mail icon" />
        </div>
        <div className="mail-handle-container">
          <img src={mailHandle} alt="mail handle" />
        </div>
      </div>
    </div>
  );
};
