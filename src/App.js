import React, { Component } from "react";
import "./App.css";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import ButtonThree from "./ButtonThree";
import ButtonFour from "./ButtonFour";

const res = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const foodRes = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/food";
const govRes =
  "http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/government";
const alcRes =
  "http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/alcohol";
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
      newQuote: [],
      foodQuote: [],
      govQuote: [],
      alcQuote: [],
      dataReady: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="accordianDiv">
          <button className="button" id="bOne">
            Random Quote
          </button>
          <ButtonOne newQuote={this.state.newQuote} />
          <button className="button">Food Quote</button>
          <ButtonTwo newFoodQuote={this.state.foodQuote} />
          <button className="button">Government Quote</button>
          <ButtonThree newGovQuote={this.state.govQuote} />
          <button className="button">Alcohol Quote</button>
          <ButtonFour newAlcQuote={this.state.alcQuote} />
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
          newQuote: res,
          dataReady: true,
        });
      });
    fetch(foodRes, options)
      .then((foodRes) => {
        return foodRes.json();
      })
      .then((foodRes) => {
        console.log(foodRes);
        this.setState({
          foodQuote: foodRes[Math.floor(Math.random() * foodRes.length)],
          dataReady: true,
        });
      });
    fetch(govRes, options)
      .then((govRes) => {
        return govRes.json();
      })
      .then((govRes) => {
        console.log(govRes);
        this.setState({
          govQuote: govRes[Math.floor(Math.random() * govRes.length)],
          dataReady: true,
        });
      });
    fetch(alcRes, options)
      .then((alcRes) => {
        return alcRes.json();
      })
      .then((alcRes) => {
        console.log(alcRes);
        this.setState({
          alcQuote: alcRes[Math.floor(Math.random() * alcRes.length)],
          dataReady: true,
        });
      });
  }
}

export default App;
