import React from 'react';

const Life = (props) => {
  return (
    <div>
        <div className="box box1">
          <span className="form-text">How'd you eat today?</span>
          <form>
              <span className="eat far fa-thumbs-down" id="eat1"></span>
              <span className="eat far fa-thumbs-down  fa-rotate-270" id="eat2"> </span>
              <span className="eat far fa-thumbs-up" id="eat3"></span>
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
