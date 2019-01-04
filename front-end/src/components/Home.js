import React from 'react';
import Graph from './Graphs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
        <div>
            <div className='dayBox'>
                <FontAwesomeIcon icon={faCalendarDay} style={{color: 'white', width: '3vh', height: 'auto'}} />
                <Link to='/form'><p className='add-day'>Add Day</p></Link>
            </div>
            <Graph />
        </div>
    )
}

export default Home;