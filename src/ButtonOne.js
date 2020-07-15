import React, { Component } from "react";
import "./Buttons.css";


function ButtonOne(props) {
  return (
    <div>
      <div className="quote">{props.newQuote}</div>
    </div>
  );
}

export default ButtonOne;
