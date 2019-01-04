import React from 'react';
import Intake from './Intake';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
    return (
        <div>
            <div className='dayBox'>
                <FontAwesomeIcon icon={faCalendarDay} style={{color: 'white', width: '3vh', height: 'auto'}} />
                <p className='add-day'>Add Day</p>
            </div>
            <Intake />
        </div>
    )
}

export default Home;