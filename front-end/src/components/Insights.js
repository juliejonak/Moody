import React from 'react';

export default class Insights extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        return(
            <div>
                <p>peyton's graph</p>

                <iframe width="900" title="hello" height="800" frameBorder="0" scrolling="no" src="//plot.ly/~peytonrunyan/106.embed"></iframe>
            </div>
        )
    }
}

// style="max-width: 100%;width: 750px;"
// style="display: block; text-align: center;"