import React from 'react';

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

    //implement the HTML CSS design of pages
    //setup axios

    // nextSlide = () => {
    //   this.setState(prevState => {
    //     formpg: prevState.formpg + 1;
    //   })
    // }

    // prevSlide = (e) => {
    //   this.setState(prevState => {
    //     formpg: prevState.formpg - 1;
    //   })
    // }

    // updateVal = (e) => {
    //   this.setState({e.target.name: e.target.value});
    //   nextSlide();
    // }

    render(){
        return(
            <div>
                {/* <p>{this.state.date}</p>
                <div id="formCarousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Mood className={this.state.formpg == 1 ? "carousel-item active" : "carousel-item"} next={this.updateVal} />
                    <Intake className={this.state.formpg == 2 ? "carousel-item active" :"carousel-item"} next={this.updateVal} />
                    <Life className={this.state.formpg == 3 ? "carousel-item active" : "carousel-item"} next={this.updateVal} />
                    <Activity className={this.state.formpg == 4 ? "carousel-item active" : "carousel-item"} submit={this.submit} />
                  </div>
                  <a onClick={this.prevSlide} className="carousel-control-prev" href="#formCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous Question</span>
                  </a>
                </div> */}
            </div>
        )
    }
}
