import React from 'react';
import './class-selector.styles.scss';

export default ({options, returnValue}) => {
  return (
    <div className="selector-container">
      <select className='selector' defaultValue={'DEFAULT'} onChange={returnValue}>
        <option value="DEFAULT" disabled hidden>Select a Job</option>
        {options.map((i) => <option className='selector-item' key={i} value={i}>{i}</option>)}
      </select>
    </div>
  )
}
