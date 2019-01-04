import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faHiking, faSwimmer, faWalking, faUserInjured, faPlaneDeparture, faBook, faCouch, faDolly, faHeart, faShoppingBag, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Activity = (props) => {
  return (
    <div className={props.page === 4 ? 'carousel-item active' : 'carousel-item'}>
      <div className='box box1'>
        <span className="form-text">Describe your day</span>
        <div className="form-sub-category">

          <FontAwesomeIcon onClick={props.update} icon={faRunning} className="tags" title="running" id="tags1" />
          <FontAwesomeIcon onClick={props.update} icon={faHiking} className="tags" title="hiking" id="tags2" />
          <FontAwesomeIcon onClick={props.update} icon={faSwimmer} className="tags" title="swimming" id="tags3" />
          <FontAwesomeIcon onClick={props.update} icon={faWalking} className="tags" title="walking" id="tags4" />
          <FontAwesomeIcon onClick={props.update} icon={faUserInjured} className="tags" title="injury" id="tags5" />
          <FontAwesomeIcon onClick={props.update} icon={faPlaneDeparture} className="tags" title="travel" id="tags6" />
          <FontAwesomeIcon onClick={props.update} icon={faBook} className="tags" title="read" id="tags7" />
          <FontAwesomeIcon onClick={props.update} icon={faCouch} className="tags" title="couch" id="tags8" />
          <FontAwesomeIcon onClick={props.update} icon={faDolly} className="tags" title="heavy labor" id="tags9" />
          <FontAwesomeIcon onClick={props.update} icon={faHeart} className="tags" title="romance" id="tags10" />
          <FontAwesomeIcon onClick={props.update} icon={faShoppingBag} className="tags" title="shop" id="tags11" />
          <FontAwesomeIcon onClick={props.update} icon={faGlassCheers} className="tags" title="social" id="tags12" />
        </div>

        <button onClick={props.submit}><Link to='/results'>Submit</Link></button>
      </div>
    </div>
  )
}

export default Activity;
