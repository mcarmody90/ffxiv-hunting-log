import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Map from '../map/map.component';
import './map-container.styles.scss';

const MapContainer = ({ currentTarget }) => {
  return (
    <div className='map-container'>
      {currentTarget ? (
        <Fragment>
          <span className='map-container__title'>{currentTarget.Zone} - {currentTarget.Subzone}</span>
          <Map zone={currentTarget} />
        </Fragment>
      ) : null}
    </div>
  )
};

const mapStateToProps = ({ target: { currentTarget } }) => ({
  currentTarget
})

export default connect(mapStateToProps)(MapContainer);