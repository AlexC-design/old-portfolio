import React from "react";
import phoneIcon from "../../../assets/icons/contact/phone.png";
import phoneSoundLeft from "../../../assets/icons/contact/phone-sound-left.png";
import phoneSoundRight from "../../../assets/icons/contact/phone-sound-right.png";

import "./phone-icon.css";

export const PhoneIcon = () => {
  return (
    <div>
      <div className="phone-icon-container">
        <img className="phone-sound-left" src={phoneSoundLeft} alt="phone sound" />
        <img className="phone-icon" src={phoneIcon} alt="phone icon" />
        <img className="phone-sound-right" src={phoneSoundRight} alt="phone sound" />
      </div>
    </div>
  );
};
