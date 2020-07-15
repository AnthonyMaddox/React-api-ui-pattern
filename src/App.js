import React, { Component } from "react";
import "./App.css";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import ButtonThree from "./ButtonThree";
import ButtonFour from "./ButtonFour";

const res = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      dataReady: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="accordianDiv">
          <ButtonOne newQuote={this.state.quotes} />
          <ButtonTwo />
          <ButtonThree />
          <ButtonFour />
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(res, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          quotes: res,
          dataReady: true,
        });
      });
  }
}

export default App;
