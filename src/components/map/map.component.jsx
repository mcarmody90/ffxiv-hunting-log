import React from 'react';
import './map.styles.scss';

export default ({ zone }) => {
  const bg = zone ? 
    require (`../../fixtures/${zone.Zone.replace(/\s/g, '-')}.png`) 
    : require ('../../fixtures/Eorzea.png')
  return zone ? (
    <div className='map' style={{ backgroundImage: `radial-gradient(circle at ${zone.Coordinates.x*2.38}% ${zone.Coordinates.y*2.38}%, red 3%, transparent 4%), url(${bg})`}}>
    </div>
  ) : null
}
