import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Insights from "./components/Insights";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/days")
      .then(response => {
        console.log("data success", response);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <p>Home</p>
        <Route exact path="/" render={props => <Form {...props} />} />
        <Route
          exact
          path="/results"
          render={props => <Insights {...props} data={this.state.data} />}
        />
      </div>
    );
  }
}
