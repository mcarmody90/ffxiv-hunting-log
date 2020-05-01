import React, { useState } from 'react';
import { connect } from 'react-redux';
import Data from '../../fixtures/data.json';
import MapContainer from '../../components/map-container/map-container.component';
import RankContainer from '../../components/rank-container/rank-container.component';
import DropdownHeader from '../../components/dropdown-header/dropdown-header.component';
import DropdownList from '../../components/dropdown-list/dropdown-list.component';
import logo from '../../fixtures/FFXIV_icon_centered.png';
import './homepage.styles.scss';

const Homepage = ({ currentJob }) => {

  const [showDropdown, toggleDropdown] = useState(false);

  return (
    <div className="homepage__container">
      <div className='homepage__dropdown-section'>
        <div className='homepage__dropdown-section-text' onClick={() => toggleDropdown(!showDropdown)}>
          <DropdownHeader />
        </div>
      </div>
      {
        showDropdown ? 
          <div onClick={() => toggleDropdown(!showDropdown)}>
            <DropdownList options={Object.keys(Data)} />
          </div> : null
      }
      { currentJob ? (
      <div className="homepage__row">
        <div className="homepage__map-section">
          <MapContainer />
        </div>
        <div className="homepage__rank-section">
            <RankContainer
              rankNames={Object.keys(Data[currentJob])}
              rankData={Data[currentJob]}
              job={currentJob}
            />
        </div>
      </div>
      ) : <div className="homepage__no-selection">
            <img className='homepage__logo' src={logo} alt="FFXIV Icon"/>
          </div> }
    </div>
  );
}

const mapStateToProps = ({ job: { currentJob } }) => ({
  currentJob
});

export default connect(mapStateToProps)(Homepage);