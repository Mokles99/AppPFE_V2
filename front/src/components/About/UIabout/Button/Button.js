import React from "react";
import "./Button.css";

const Button = ({ text, btnClass, href }) => {
  return (
    <a id="part1" href={href} className={`btn ${btnClass}`}>
      {text}
    </a>
  );
};

export default Button;