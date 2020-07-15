import React, { Component } from "react";
import "./Buttons.css";

function ButtonFour(props) {
  return (
    <div>
      <div className="quote">{props.newAlcQuote}</div>
    </div>
  );
}

export default ButtonFour;
