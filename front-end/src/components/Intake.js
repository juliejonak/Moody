import React from 'react';

const Intake = (props) => {
  return (
    <div className="box box1">
      <span className="form-text">What'd you consume?</span>
      <span className="form-sub-text">Water</span>
      <span className="form-sub-category">
          <span className="water fas fa-tint fa-2x" id="water1"></span>
          <span className="water fas fa-tint fa-3x" id="water2"></span>
          <span className="water fas fa-tint fa-4x" id="water3"></span>
      </span>
      <span className="form-sub-text">Alcohol</span>
      <span className="form-sub-category">
          <span className="alcohol fas fa-beer fa-2x" id="alcohol1"></span>
          <span className="alcohol fas fa-beer fa-3x" id="alcohol2"></span>
          <span className="alcohol fas fa-beer fa-4x" id="alcohol3"></span>
      </span>
      <span className="form-sub-text">Caffeine</span>
      <span className="form-sub-category">
          <span className="caffeine fas fa-mug-hot fa-2x" id="caffeine1"></span>
          <span className="caffeine fas fa-mug-hot fa-3x" id="caffeine2"></span>
          <span className="caffeine fas fa-mug-hot fa-4x" id="caffeine3"></span>
      </span>
    </div>
  )
};

export default Intake;
