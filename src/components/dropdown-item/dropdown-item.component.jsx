import React from 'react';
import { connect } from 'react-redux';
import { setCurrentJob } from '../../redux/job/job.actions';
import './dropdown-item.styles.scss';

const DropdownItem = ({ setCurrentJob, value }) => {
  
  return (
    <div className='dropdown-item'>
      <span onClick={setCurrentJob} className="dropdown-item__name">{ value }</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentJob: e => dispatch(setCurrentJob(e.target.innerHTML))
});

export default connect(null, mapDispatchToProps)(DropdownItem);
