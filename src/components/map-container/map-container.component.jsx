import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Map from '../map/map.component';
import './map-container.styles.scss';

const MapContainer = ({ currentTarget }) => {
  const zone = require ('../../fixtures/Eorzea.png');
  return (
    <div className='map-container'>
      {currentTarget ? (
        <Fragment>
          <span className='map-container__title'>{currentTarget.Zone} - {currentTarget.Subzone}</span>
          <Map zone={currentTarget} />
        </Fragment>
      ) : 
      <div 
        className='map' 
        style={{backgroundImage: `url(${zone})`}}
        >
      </div>
    }
    </div>
  )
};

const mapStateToProps = ({ target: { currentTarget } }) => ({
  currentTarget
})

export default connect(mapStateToProps)(MapContainer);