import React from 'react';
import './map.styles.scss';

export default (props) => {
  const bg = props.zone ? 
    require (`../../fixtures/${props.zone.Zone.replace(/\s/g, '-')}.png`) 
    : require ('../../fixtures/Eorzea.png')
  return props.zone ? (
    <div className='map' style={{ backgroundImage: `radial-gradient(circle at ${props.zone.Coordinates.x*2.38}% ${props.zone.Coordinates.y*2.38}%, red 3%, transparent 4%), url(${bg})`}}>
    </div>
  ) : null
}
