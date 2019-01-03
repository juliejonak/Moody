import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faSadCry, faMehBlank, faSmile, faGrinBeam } from '@fortawesome/free-solid-svg-icons';

const Mood = (props) => {
  return (
    <div className="box box1">
      <span className="form-text">How do you feel today?</span>
      <form>
        <FontAwesomeIcon icon={faSadCry} className="mood far" id="angry" name="mood" value="1" />
        <FontAwesomeIcon icon={faFrown} className="mood far" id="sad" name="mood" value="2" />
        <FontAwesomeIcon icon={faMehBlank} className="mood far" id="neutral" name="mood" value="3" />
        <FontAwesomeIcon icon={faSmile} className="mood far" id="happy" name="mood" value="4" />
        <FontAwesomeIcon icon={faGrinBeam} className="mood far" id="thrilled" name="mood" value="5" />
        </form>
      </div>
      )
};

export default Mood;
