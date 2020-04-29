import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './target-item.styles.scss';

export default ({children, getZone}) => {
  const [showChildren, setShowChildren] = useState(false);
  const [value, setValue] = useState(false);

  const handleShowChildren = () => {
    setValue(!value);
    setShowChildren(!showChildren);
  }
  return (
    <div className='target-item__container'>
      <h2 onClick={handleShowChildren} className='target-item__title'>{children.Title}</h2>
      {showChildren ? children.Target.map(target => (
          <div onClick={() => getZone(target.Subzone)} className='target-item' key={uuidv4()}>
            <p className='target-item__name'>{target.Name}</p>
            <p>Quantity: {target.Quantity}</p>
            <p>{target.Zone} - {target.Subzone}</p>
            <p>Coordinates: x {target.Coordinates.x}, y {target.Coordinates.y}</p>
          </div>
        )
      ) : <p></p>}
    </div>
  )
}
