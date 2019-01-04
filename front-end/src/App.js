import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Insights from "./components/Insights";
import NavBarPage from './components/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import "./App.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

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

        <div className='nav'>
          <h1 className="logo"> Moody </h1>
          <NavBarPage />
        </div>

       <div className='dayBox'>
           <FontAwesomeIcon icon={faCalendarDay} style={{color: 'white', width: '3vh', height: 'auto'}} />
           <p className='add-day'>Add Day</p>
       </div>
        
        <Route path="/form" render={props => <Form {...props} />} />
        <Route
          exact
          path="/"
          render={props => <Insights {...props} data={this.state.data} />}
        />
        <Route path='/results' render={props => <Insights {...props} /> } />

      </div>
    );
  }
}
