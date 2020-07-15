import React, { Component } from "react";
import "./Buttons.css";

function ButtonOne (props) {
   return (<div>
      <button className="button">Random Quote</button>
      <div className="quote">{props.newQuote}</div>
      </div> 
   )
}

export default ButtonOne