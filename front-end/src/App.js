import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Form from './components/form';
import Insights from './components/insights';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    axios.get('')
      .then( response => {
        this.setState({ data: response.data })
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => <Form {...props} />} />
        <Route path='/results' reunder={(props) => <Insights {...props} /> } />
      </div>
    );
  }
};