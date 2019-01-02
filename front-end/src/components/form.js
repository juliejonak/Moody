import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            happiness: '',
            stress: '',
            energy: '',
            sleep: '',
            water: '',
            alcohol: '',
            caffeine: '',
            food: '',
            tags: []
        }
    };

    componentDidMount(){
        let currentDate = Date.now();
        this.setState({
            date: currentDate
        })
    };

    render(){
        return(
            <div>
                <p>{this.state.date}</p>
            </div>
        )
    }
};