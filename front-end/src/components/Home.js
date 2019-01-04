import React from 'react';
import Insights from './Insights';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
    return (
        <div>
            <div className='dayBox'>
                <FontAwesomeIcon icon={faCalendarDay} style={{color: 'white', width: '3vh', height: 'auto'}} />
                <p className='add-day'>Add Day</p>
            </div>
            <Insights />
        </div>
    )
}

export default Home;