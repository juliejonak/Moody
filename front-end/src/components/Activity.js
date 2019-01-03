import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faHiking, faSwimmer, faWalking, faUserInjured, faPlaneDeparture, faBook, faCouch, faDolly, faHeart, faShoppingBag, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Activity = (props) => {
  return (
    <div className={props.page === 4 ? 'carousel-item active' : 'carousel-item'}>
      <div className='box box1'>
        <span className="form-text">Describe your day</span>
        <div className="form-sub-category">

          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faRunning} className="tags fas" title="running" id="tags1" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faHiking} className="tags fas" title="hiking" id="tags2" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faSwimmer} className="tags fas fa-3x" title="swimming" id="tags3" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faWalking} className="tags fas" title="walking" id="tags4" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faUserInjured} className="tags fas" title="injury" id="tags5" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faPlaneDeparture} className="tags fas fa-3x" title="travel" id="tags6" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faBook} className="tags fas fa-3x" title="read" id="tags7" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faCouch} className="tags fas fa-3x" title="couch" id="tags8" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faDolly} className="tags fas fa-3x" title="heavy labor" id="tags9" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faHeart} className="tags fas fa-3x" title="romance" id="tags10" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faShoppingBag} className="tags fas fa-3x" title="shop" id="tags11" />
          <FontAwesomeIcon onClick={props.update} type="checkbox" icon={faGlassCheers} className="tags fas fa-3x" title="social" id="tags12" />
        </div>
      </div>
    </div>
  )
}

export default Activity;
