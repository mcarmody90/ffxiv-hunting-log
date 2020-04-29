import React, { useState, useEffect } from 'react';
import Data from '../../fixtures/data.json';
import ClassSelector from '../../components/class-selector/class-selector.component';
import MapContainer from '../../components/map-container/map-container.component';
import RankContainer from '../../components/rank-container/rank-container.component';

import './homepage.styles.scss';

export default () => {
  const [job, setJob] = useState(null);
  
  const [zone, setZone] = useState(null);

  useEffect(() => console.log('mounted'), []);

  useEffect(() => console.log('updated'));

  useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);

  const returnValue = (e) => {
    setJob(e.target.value);
  }

  const getZone = (zone) => {
    setZone(zone);
  }

  return (
    <div className="container">
      <ClassSelector options={Object.keys(Data)} returnValue={returnValue} />
      <div className="row">
        <div className="map-section">
          {/* <h1>{zone}</h1> */}
          <MapContainer zone={zone} />
        </div>
        <div className="rank-section">
          { job ? (
            <RankContainer
              rankNames={Object.keys(Data[job])}
              getZone={getZone}
              rankData={Data[job]}
            />
          ) : null }
        </div>
      </div>
    </div>
  );
}
