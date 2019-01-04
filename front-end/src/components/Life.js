import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../index.css';


const Life = (props) => {
  return (
    <div className={props.page === 3 ? 'carousel-item active' : 'carousel-item'}>
        <div className='box box1'>
          <span className="form-text">How'd you eat today?</span>
          <span className="form-sub-category">
              <FontAwesomeIcon onClick={props.update} icon={faThumbsDown} className="eat" id="eat1" name="food" value="1" />
              <FontAwesomeIcon onClick={props.update} icon={faThumbsDown} className="eat fa-rotate-270" id="eat2" name="food" value="2" />
              <FontAwesomeIcon onClick={props.update} icon={faThumbsUp} className="eat" id="eat3" name="food" value="3" />
            </span>
        </div>

        <div className="box box1">
          <span className="form-text">How did you sleep last night?</span>
          <span className="form-sub-category">
            <span onClick={props.next} className="sleep" id="sleep1" name="sleep" value="1">z</span>
            <span onClick={props.next} className="sleep" id="sleep2" name="sleep" value="2">zZ</span>
            <span onClick={props.next} className="sleep" id="sleep3" name="sleep" value="3">zZZ</span>
          </span>
          </div>
    </div>
  )
}

export default Life;
