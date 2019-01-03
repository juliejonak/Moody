import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const Life = (props) => {
  return (
    <div>
        <div className="box box1">
          <span className="form-text">How'd you eat today?</span>
          <form> 
              <FontAwesomeIcon icon={faThumbsDown} className="eat far" id="eat1" />  
              <FontAwesomeIcon icon={faThumbsDown} className="eat far fa-rotate-270" id="eat2" />
              <FontAwesomeIcon icon={faThumbsUp} className="eat far" id="eat3" />            
            </form>
        </div>

        <div className="box box1">
          <span className="form-text">How did you sleep last night?</span>
          <span className="form-sub-category">
            <span className="sleep" id="sleep1">z</span>
            <span className="sleep" id="sleep2">zZ</span>
            <span className="sleep" id="sleep3">zZZ</span>
          </span>      
          </div>
    </div>
  )
}

export default Life;