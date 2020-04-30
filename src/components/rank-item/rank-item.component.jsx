import React, { useState, Fragment } from 'react';
import TargetContainer from '../target-container/target-container.component';
import { v4 as uuidv4 } from 'uuid';
import './rank-item.styles.scss';

export default ({children, data, getZone}) => {
  const [showChildren, setShowChildren] = useState(false);

  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  }
  return (
    <div className='rank-item'>
      <span onClick={handleShowChildren} className='rank-item__title'>
        <span className='rank__symbol'>{ showChildren ? <Fragment>&#11167;</Fragment> : <Fragment>&#11166;</Fragment> }</span>
        {' '}{children}
      </span>
      { showChildren ? <TargetContainer key={uuidv4()} tasks={data[children].Tasks} getZone={getZone} /> : null }
    </div>
  )
}
