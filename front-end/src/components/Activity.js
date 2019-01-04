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

          <FontAwesomeIcon onClick={props.update} style={props.tags !== [] ? {color: 'color: rgb(55, 186, 238)'} : null} icon={faRunning} className="tags" title="running" value="running" id="tags1" />
          <FontAwesomeIcon onClick={props.update} icon={faHiking} className="tags" title="hiking" value="hiking" id="tags2" />
          <FontAwesomeIcon onClick={props.update} icon={faSwimmer} className="tags" title="swimming" value="swimming" id="tags3" />
          <FontAwesomeIcon onClick={props.update} icon={faWalking} className="tags" title="walking" value="walking" id="tags4" />
          <FontAwesomeIcon onClick={props.update} icon={faUserInjured} className="tags" title="injury" value="injury" id="tags5" />
          <FontAwesomeIcon onClick={props.update} icon={faPlaneDeparture} className="tags" title="traveling" value="traveling" id="tags6" />
          <FontAwesomeIcon onClick={props.update} icon={faBook} className="tags" title="reading" value="reading" id="tags7" />
          <FontAwesomeIcon onClick={props.update} icon={faCouch} className="tags" title="lounging" value="lounging" id="tags8" />
          <FontAwesomeIcon onClick={props.update} icon={faDolly} className="tags" title="heavy labor" value="heavy labor" id="tags9" />
          <FontAwesomeIcon onClick={props.update} icon={faHeart} className="tags" title="date" value="date" id="tags10" />
          <FontAwesomeIcon onClick={props.update} icon={faShoppingBag} className="tags" title="shopping" value="shopping" id="tags11" />
          <FontAwesomeIcon onClick={props.update} icon={faGlassCheers} className="tags" title="socializing" value="socializing" id="tags12" />
        </div>

        <button onClick={props.submit} className='submitBox' style={{padding: '10px 0px 0px 45px'}}><Link to='/results' style={{fontFamily: 'Timmana, sans-serif', fontSize: '22px', color: 'white', fontWeight: 'bold'}}>Submit</Link></button>
      </div>
    </div>
  )
}

export default Activity;