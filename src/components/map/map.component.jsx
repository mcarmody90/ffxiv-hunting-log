import React from 'react';
import './map.styles.scss';

export default ({ zone }) => {
  return (
    <div className='map' style={{border: '5px solid brown', backgroundImage: `url(${zone})`}}>
      <h1>MAP COMPONENT { zone }</h1>
    </div>
  )
}
