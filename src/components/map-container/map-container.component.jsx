import React from 'react';
import Map from '../map/map.component';

export default ({ zone }) => {
  return (
    <div>
      <h1>MAP CONTAINER</h1>
      <Map zone={zone} />
    </div>
  )
}
