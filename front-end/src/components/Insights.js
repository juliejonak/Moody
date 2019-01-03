import React from 'react';

export default class Insights extends React.Component{
    constructor(props){
        super(props);
    };
    
    render(){
        return(
            <div>
                <p>peyton's graph</p>

                <a href="https://plot.ly/~peytonrunyan/106/?share_key=1ywvJcfiZduRhdE8SYrIs2" target="_blank" title="plot from API (12)" ><img src="https://plot.ly/~peytonrunyan/106.png?share_key=1ywvJcfiZduRhdE8SYrIs2" alt="plot from API (12)"   width="750" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
                
                <script data-plotly="peytonrunyan:106" sharekey-plotly="1ywvJcfiZduRhdE8SYrIs2" src="https://plot.ly/embed.js" async></script>
            </div>
        )
    }
}

// style="max-width: 100%;width: 750px;"
// style="display: block; text-align: center;"