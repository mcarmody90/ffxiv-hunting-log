import React from 'react';
import DropdownItem from '../dropdown-item/dropdown-item.component';
import './dropdown-list.styles.scss';

const DropdownList = ({ options }) => {
  return (
    <div className='dropdown-list__container'>
      <div className="dropdown-list">
      {options.map((i) => <DropdownItem key={i} value={i} />)}
      </div>
    </div>
  )
}

export default DropdownList;