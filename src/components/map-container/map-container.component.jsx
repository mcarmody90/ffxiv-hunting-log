import React from 'react';
import Map from '../map/map.component';
import './map-container.styles.scss';

export default (props) => {
  return (
    <div className='map-container'>
      {props.zone ? (<h1 className='map-container__title'>{props.zone.Zone} - {props.zone.Zone}</h1>) : null}
      <Map zone={props.zone} />
    </div>
  )
}
