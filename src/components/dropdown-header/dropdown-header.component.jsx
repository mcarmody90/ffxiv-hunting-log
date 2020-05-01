import React from 'react';
import { connect } from 'react-redux';
import './dropdown-header.styles.scss';

const DropdownHeader = ({ currentJob }) => {

  const displayShit = (e) => {
    console.log('Displayin\' Shit:',e.target.innerHTML);
  }

  return (
    <div className='dropdown-header'>
      <h1 className='dropdown-header__title' onClick={displayShit}>{currentJob ? currentJob : 'CLICK HERE TO SELECT A JOB'}</h1>
    </div>
  )
}

const mapStateToProps = ({ job: { currentJob } }) => ({
  currentJob
})

export default connect(mapStateToProps)(DropdownHeader);