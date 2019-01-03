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
          <FontAwesomeIcon onClick={props.next} icon={faSadCry} className="mood far" id="angry" name="mood" value="1" />
          <FontAwesomeIcon onClick={props.next} icon={faFrown} className="mood far" id="sad" name="mood" value="2" />
          <FontAwesomeIcon onClick={props.next} icon={faMehBlank} className="mood far" id="neutral" name="mood" value="3" />
          <FontAwesomeIcon onClick={props.next} icon={faSmile} className="mood far" id="happy" name="mood" value="4" />
          <FontAwesomeIcon onClick={props.next} icon={faGrinBeam} className="mood far" id="thrilled" name="mood" value="5" />
          </form>
        </div>
      </div>
      )
};

export default Mood;
