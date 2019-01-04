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
<<<<<<< HEAD
<<<<<<< HEAD
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 1 ? {color: '#3153EA'} : null } className="water fas fa-2x" id="water1" name="water" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 2 ? {color: '#3153EA'} : null } className="water fas fa-3x" id="water2" name="water" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 3 ? {color: '#3153EA'} : null } className="water fas fa-4x" id="water3" name="water" value="3" />
=======
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water1" name="water" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water2" name="water" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} className="water" id="water3" name="water" value="3" />
>>>>>>> aac49d2d1f5b0644f27ef6844a4dd9f72ae608e9
        </span>
        <span className="form-sub-category">
<<<<<<< HEAD
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 1 ? {color: '#FFD016'} : null } className="alcohol fas fa-2x" id="alcohol1" name="alcohol" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 2 ? {color: '#FFD016'} : null } className="alcohol fas fa-3x" id="alcohol2" name="alcohol" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 3 ? {color: '#FFD016'} : null } className="alcohol fas fa-4x" id="alcohol3" name="alcohol" value="3" />
=======
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol1" name="alcohol" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol2" name="alcohol" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} className="alcohol" id="alcohol3" name="alcohol" value="3" />
>>>>>>> aac49d2d1f5b0644f27ef6844a4dd9f72ae608e9
        </span>
        <span className="form-sub-category">
<<<<<<< HEAD
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} style={props.caffeine === 1 ? {color: 'rgb(83, 70, 70)'} : null } className="caffeine fas fa-2x" id="caffeine1" name="caffeine" value="1" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine fas fa-3x" id="caffeine2" name="caffeine" value="2" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine fas fa-4x" id="caffeine3" name="caffeine" value="3" />
=======
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine1" name="caffeine" value="1" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine2" name="caffeine" value="2" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine" id="caffeine3" name="caffeine" value="3" />
>>>>>>> aac49d2d1f5b0644f27ef6844a4dd9f72ae608e9
=======
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 1 ? {color: '#3153EA'} : null } className="water fas fa-2x" id="water1" name="water" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 2 ? {color: '#3153EA'} : null } className="water fas fa-3x" id="water2" name="water" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faTint} style={props.water === 3 ? {color: '#3153EA'} : null } className="water fas fa-4x" id="water3" name="water" value="3" />
        </span>
        <span className="form-sub-category">
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 1 ? {color: '#FFD016'} : null } className="alcohol fas fa-2x" id="alcohol1" name="alcohol" value="1" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 2 ? {color: '#FFD016'} : null } className="alcohol fas fa-3x" id="alcohol2" name="alcohol" value="2" />
          <FontAwesomeIcon onClick={props.update} icon={faBeer} style={props.alcohol === 3 ? {color: '#FFD016'} : null } className="alcohol fas fa-4x" id="alcohol3" name="alcohol" value="3" />
        </span>
        <span className="form-sub-category">
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} style={props.caffeine === 1 ? {color: 'rgb(83, 70, 70)'} : null } className="caffeine fas fa-2x" id="caffeine1" name="caffeine" value="1" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine fas fa-3x" id="caffeine2" name="caffeine" value="2" />
          <FontAwesomeIcon onClick={props.next} icon={faMugHot} className="caffeine fas fa-4x" id="caffeine3" name="caffeine" value="3" />
>>>>>>> 08189bdf03479c0c31f29fcecd5b32b351ae792d
        </span>
      </div>
    </div>
  )
};

export default Intake;
