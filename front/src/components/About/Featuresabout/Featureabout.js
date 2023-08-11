

import React from "react";
import "./Featureabout.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Featureabout = ({ icon, heading, text }) => {
  return (
    <div className="featureabout">
      <div className="featureabout-icon">
        <BsHexagon color="#0084b3" size={55} />
        <div className="innerabout-icon">{icon}</div>
      </div>

      <div className="featureabout-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Featureabout;