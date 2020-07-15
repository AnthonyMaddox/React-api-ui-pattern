import React, { Component } from "react";
import "./Buttons.css";

function ButtonTwo (props) {
   return (<div>
      <button className="button">Food Quote</button>
      <div className="quote">{props.newQuote}</div>
      </div>
   )
}

export default ButtonTwo