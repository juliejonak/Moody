import React from 'react';

const Intake = (props) => {
  return (
    <div class="box box1">
      <span class="form-text">What'd you consume?</span>
      <span class="form-sub-text">Water</span>
      <span class="form-sub-category">
          <span class="water fas fa-tint fa-2x" id="water1"></span>
          <span class="water fas fa-tint fa-3x" id="water2"></span>
          <span class="water fas fa-tint fa-4x" id="water3"></span>
      </span>
      <span class="form-sub-text">Alcohol</span>
      <span class="form-sub-category">
          <span class="alcohol fas fa-beer fa-2x" id="alcohol1"></span>
          <span class="alcohol fas fa-beer fa-3x" id="alcohol2"></span>
          <span class="alcohol fas fa-beer fa-4x" id="alcohol3"></span>
      </span>
      <span class="form-sub-text">Caffeine</span>
      <span class="form-sub-category">
          <span class="caffeine fas fa-mug-hot fa-2x" id="caffeine1"></span>
          <span class="caffeine fas fa-mug-hot fa-3x" id="caffeine2"></span>
          <span class="caffeine fas fa-mug-hot fa-4x" id="caffeine3"></span>
      </span>
    </div>
  )
};

export default Intake;
