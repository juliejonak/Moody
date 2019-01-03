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

    //implement the HTML CSS design of pages
    //setup axios

    nextSlide = () => {
      this.setState(prevState => {
        formpg: prevState.formpg + 1;
      })
    }

    prevSlide = (e) => {
      this.setState(prevState => {
        formpg: prevState.formpg - 1;
      })
    }

    updateVal = (e) => {
      this.setState({ [e.target.name]: e.target.value});
      nextSlide();
    }

    render(){
        return(
            <div>

              <button onClick={this.submit}>Press me</button>

              <p>{this.state.date}</p>

              <div id="formCarousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <Mood className={this.state.formpg === 1 ? "carousel-item active" : "carousel-item"} next={this.updateVal} />
                    <Intake className={this.state.formpg === 2 ? "carousel-item active" :"carousel-item"} next={this.updateVal} />
                    <Life className={this.state.formpg === 3 ? "carousel-item active" : "carousel-item"} next={this.updateVal} />
                    <Activity className={this.state.formpg === 4 ? "carousel-item active" : "carousel-item"} submit={this.submit} />
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
