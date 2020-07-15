import React, { Component } from "react";
import "./Buttons.css";

function ButtonThree(props) {
  return (
    <div>
      <button className="button">Government Quote</button>
      <div className="quote">{props.newQuote}</div>
    </div>
  );
}

export default ButtonThree;
