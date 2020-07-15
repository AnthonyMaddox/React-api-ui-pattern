import React, { Component } from "react";
import "./Buttons.css";

function ButtonFour(props) {
  return (
    <div>
      <button className="button">Alcohol Quote</button>
      <div className="quote">{props.newQuote}</div>
    </div>
  );
}

export default ButtonFour;
