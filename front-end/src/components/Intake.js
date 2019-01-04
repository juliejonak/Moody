import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faTint, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '../index.css';


const Intake = (props) => {
  return (
    <div className={props.page === 2 ? 'carousel-item active' : 'carousel-item'}>
      <div className='box box1'>
        <span className="form-text">What'd you consume?</span>
        <span className="form-sub-category">
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water1" name="water" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water2" name="water" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water3" name="water" value="3" />
        </span>
        <span className="form-sub-category">
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol1" name="alcohol" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol2" name="alcohol" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol3" name="alcohol" value="3" />
        </span>
        <span className="form-sub-category">
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine1" name="caffeine" value="1" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine2" name="caffeine" value="2" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine3" name="caffeine" value="3" />
        </span>
      </div>
    </div>
  )
};

export default Intake;
