import React from 'react';
import TargetItem from '../target-item/target-item.component';
import { v4 as uuidv4 } from 'uuid';
import './target-container.styles.scss';

export default ({tasks}) => {
  return (
    <div className='target-container'>
      {tasks.map(task => <TargetItem key={uuidv4()}>{task}</TargetItem>)}
    </div>
  )
}
