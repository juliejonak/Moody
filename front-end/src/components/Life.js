import React from 'react';

const Life = (props) => {
  return (
    <div>
        <div class="box box1">
          <span class="form-text">How'd you eat today?</span>
          <form> 
              <span class="eat far fa-thumbs-down" id="eat1"></span>
              <span class="eat far fa-thumbs-down  fa-rotate-270" id="eat2"> </span>
              <span class="eat far fa-thumbs-up" id="eat3"></span>
            </form>
        </div>

        <div class="box box1">
          <span class="form-text">How did you sleep last night?</span>
          <span class="form-sub-category">
            <span class="sleep" id="sleep1">z</span>
            <span class="sleep" id="sleep2">zZ</span>
            <span class="sleep" id="sleep3">zZZ</span>
          </span>      
          </div>
    </div>
  )
}

export default Life;