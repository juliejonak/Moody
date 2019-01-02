import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import Form from './components/Form';
import Insights from './components/Insights';
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
        <Route path='/results' reunder={(props) => <Insights {...props} data={this.state.data} /> } />
      </div>
    );
  }
};
