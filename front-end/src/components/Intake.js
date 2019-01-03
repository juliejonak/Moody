import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faTint, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '../index.css';


const Intake = (props) => {
  return (
    <div className="box box1">
      <span className="form-text">What'd you consume?</span>
      <span className="form-sub-text">Water</span>
      <span className="form-sub-category">
        <FontAwesomeIcon icon={faTint} className="water fas fa-2x" id="water1" />
        <FontAwesomeIcon icon={faTint} className="water fas fa-3x" id="water2" />
        <FontAwesomeIcon icon={faTint} className="water fas fa-4x" id="water3" />
      </span>
      <span className="form-sub-text">Alcohol</span>
      <span className="form-sub-category">
        <FontAwesomeIcon icon={faBeer} className="alcohol fas fa-2x" id="alcohol1" />
        <FontAwesomeIcon icon={faBeer} className="alcohol fas fa-3x" id="alcohol2" />
        <FontAwesomeIcon icon={faBeer} className="alcohol fas fa-4x" id="alcohol3" />
      </span>
      <span className="form-sub-text">Caffeine</span>
      <span className="form-sub-category">
        <FontAwesomeIcon icon={faMugHot} className="caffeine fas fa-2x" id="caffeine1" />
        <FontAwesomeIcon icon={faMugHot} className="caffeine fas fa-3x" id="caffeine2" />
        <FontAwesomeIcon icon={faMugHot} className="caffeine fas fa-4x" id="caffeine3" />
      </span>
    </div>
  )
};

export default Intake;
