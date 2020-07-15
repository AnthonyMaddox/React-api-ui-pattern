import React, { Component } from "react";
import "./Buttons.css";

function ButtonTwo(props) {
  console.log(props);
  return (
    <div>
      <div className="quote">{props.newFoodQuote}</div>
    </div>
  );
}

export default ButtonTwo;
