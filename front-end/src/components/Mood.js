import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faSadCry, faMehBlank, faSmile, faGrinBeam } from '@fortawesome/free-solid-svg-icons';
import '../index.css';


const Mood = (props) => {
  return (
    <div className={props.page === 1 ? 'carousel-item active' : 'carousel-item'}>
      <div className='box box1'>
        <span className="form-text">How do you feel today?</span>
        <form>
          <FontAwesomeIcon onClick={props.next} style={props.mood === 1 ? {color: '#FF4099'} : null } icon={faSadCry} className="mood far" id="angry" name='mood' value='1' />
          <FontAwesomeIcon onClick={props.next} style={props.mood === 2 ? {color: '#FF4099'} : null } icon={faFrown} className="mood far" id="sad" name="mood" value="2" />
          <FontAwesomeIcon onClick={props.next} style={props.mood === 3 ? {color: '#FF4099'} : null } icon={faMehBlank} className="mood far" id="neutral" name="mood" value="3" />
          <FontAwesomeIcon onClick={props.next} style={props.mood === 4 ? {color: '#FF4099'} : null } icon={faSmile} className="mood far" id="happy" name="mood" value="4" />
          <FontAwesomeIcon onClick={props.next} style={props.mood === 5 ? {color: '#FF4099'} : null } icon={faGrinBeam} className="mood far" id="thrilled" name="mood" value="5" />
          </form>
        </div>
      </div>
      )
};

export default Mood;
