import React, { useState } from 'react';
import Data from '../../fixtures/data.json';
import ClassSelector from '../../components/class-selector/class-selector.component';
import MapContainer from '../../components/map-container/map-container.component';
import RankContainer from '../../components/rank-container/rank-container.component';

import './homepage.styles.scss';

export default () => {
  const [job, setJob] = useState(null);

  const returnValue = (e) => {
    setJob(e.target.value);
  }

  return (
    <div className="container">
      <ClassSelector options={Object.keys(Data)} returnValue={returnValue} />
      <div className="row">
        <div className="map-section">
          {/* <h1>{zone}</h1> */}
          <MapContainer />
        </div>
        <div className="rank-section">
          { job ? (
            <RankContainer
              rankNames={Object.keys(Data[job])}
              rankData={Data[job]}
              job={job}
            />
          ) : null }
        </div>
      </div>
    </div>
  );
}
