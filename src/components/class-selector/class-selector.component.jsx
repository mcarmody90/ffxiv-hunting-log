import React from 'react';
import { connect } from 'react-redux';
import { setCurrentJob } from '../../redux/job/job.actions';
import './class-selector.styles.scss';

const ClassSelector = ({options, setCurrentJob}) => {
  return (
    <div className="selector-container">
      <select className='selector' defaultValue={'DEFAULT'} onChange={setCurrentJob}>
        <option value="DEFAULT" disabled hidden>Select a Job</option>
        {options.map((i) => <option className='selector-item' key={i} value={i}>{i}</option>)}
      </select>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentJob: e => dispatch(setCurrentJob(e.target.value))
});

export default connect(null, mapDispatchToProps)(ClassSelector);
