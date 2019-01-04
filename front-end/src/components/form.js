import React from 'react';
import axios from 'axios';
import Mood from './Mood';
import Intake from './Intake';
import Life from './Life';
import Activity from './Activity';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mood: '',
            stress: '',
            energy: '',
            sleep: '',
            water: '',
            alcohol: '',
            caffeine: '',
            food: '',
            tags: [],
            formpg: 1,
        }
    }

    submit = (e) => {
      e.preventDefault();

      const newDay = {
        mood: this.state.mood,
        stress: this.state.stress,
        energy: this.state.energy,
        sleep: this.state.sleep,
        water: this.state.water,
        alcohol: this.state.alcohol,
        caffeine: this.state.caffeine,
        food: this.state.food,
      }

      axios.post('http://localhost:5000/api/days', newDay)
        .then(response => {
          console.log('a response!', response)
        })
        .catch(err => console.log("Couldn't add! ahhhh"))
    }

    nextSlide = (e) => {
      this.updateVal(e);
      this.setState(prevState => ({
        formpg: prevState.formpg + 1
      }))
    }

    prevSlide = (e) => {
      this.setState(prevState => ({
        formpg: prevState.formpg - 1
      }))
    }

    updateVal = (e) => {
      this.setState({ [e.target.name]: e.target.value});
    }

    render(){
      return(
          <div>

            <button onClick={this.submit}>Submit</button>

            <p>{this.state.date}</p>

            <div id="formCarousel" className="carousel slide" data-ride="carousel">

              <div className="carousel-inner">
                  <Mood update={this.updateVal} next={this.nextSlide} page={this.state.formpg} />
                  <Intake update={this.updateVal} next={this.nextSlide} page={this.state.formpg} />
                  <Life update={this.updateVal}next={this.nextSlide} page={this.state.formpg} />
                  <Activity update={this.updateVal} submit={this.submit} page={this.state.formpg} />
              </div>

              <a onClick={this.prevSlide} className="carousel-control-prev" href="#formCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous Question</span>
              </a>

            </div>

          </div>
      )
  }
}
