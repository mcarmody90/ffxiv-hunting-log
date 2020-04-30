import React from 'react';
import { connect } from 'react-redux';
import Data from '../../fixtures/data.json';
import ClassSelector from '../../components/class-selector/class-selector.component';
import MapContainer from '../../components/map-container/map-container.component';
import RankContainer from '../../components/rank-container/rank-container.component';
import './homepage.styles.scss';

const Homepage = ({ currentJob }) => {
  return (
    <div className="container">
      <ClassSelector options={Object.keys(Data)} />
      <div className="row">
        <div className="map-section">
          <MapContainer />
        </div>
        <div className="rank-section">
          { currentJob ? (
            <RankContainer
              rankNames={Object.keys(Data[currentJob])}
              rankData={Data[currentJob]}
              job={currentJob}
            />
          ) : null }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ job: { currentJob } }) => ({
  currentJob
});

export default connect(mapStateToProps)(Homepage);