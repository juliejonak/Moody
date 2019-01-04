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

    nextSlide = (e) => {
      this.updateVal(e);
      this.setState(prevState => ({
        formpg: prevState.formpg + 1
      }))
    }

    prevSlide = (e) => {
      if (this.state.formpg === 1) {
        return;
      }
      this.setState(prevState => ({
        formpg: prevState.formpg - 1
      }))
    }

    updateVal = (e) => {
      this.setState({ [e.currentTarget.getAttribute('name')]: parseInt(e.currentTarget.getAttribute('value'))});
    }

    updateTags = (e) => {
      const activity = e.currentTarget.getAttribute('value');
      if (this.state.tags.includes(activity)) {
        return;
      }
      console.log(activity);
      this.setState(prevState => ({
        tags: [...prevState.tags, activity]
      }));
    }

    render(){
        return(
            <div>

              <button onClick={this.submit}>Press me</button>

              <p>{this.state.date}</p>

              <div id="formCarousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <Mood mood={this.state.mood} update={this.updateVal} next={this.nextSlide} page={this.state.formpg} />
                    <Intake water={this.state.water} alcohol={this.state.alcohol} caffeine={this.state.caffeine} update={this.updateVal} next={this.nextSlide} page={this.state.formpg} />
                    <Life food={this.state.food} sleep={this.state.sleep} update={this.updateVal}next={this.nextSlide} page={this.state.formpg} />
                    <Activity tags={this.state.tags} update={this.updateTags} submit={this.submit} page={this.state.formpg} />
                </div>

                <a style={this.state.formpg === 1 ? {display: 'none'} : null} onClick={this.prevSlide} className="carousel-control-prev" href="#formCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous Question</span>
                </a>

              </div>

            </div>
        )
    }
}
