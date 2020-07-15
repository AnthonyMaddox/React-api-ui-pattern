import React, { Component } from "react";
import "./Buttons.css";

function ButtonThree(props) {
  return (
    <div>
      <div className="quote">{props.newGovQuote}</div>
    </div>
  );
}

export default ButtonThree;
