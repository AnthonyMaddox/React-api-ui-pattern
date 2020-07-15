import React, { Component } from "react";

function ButtonOne(props) {
  return (
    <div>
      <div id="bOne" className="quoteDiv quote"  >{props.newQuote} </div>
    </div>
  );
}

export default ButtonOne;
