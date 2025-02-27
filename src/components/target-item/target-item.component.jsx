import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { setCurrentTarget } from '../../redux/target/target.actions';
import './target-item.styles.scss';

const TargetItem = ({ setCurrentTarget, children: { Title, Target } }) => {

  const [showChildren, setShowChildren] = useState(true);

  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  }

  const XButton = ({ onClick }) => {
    return (
      <button className='x-button' onClick={onClick}>
        &#10006;
      </button>
    )
  }

  const markFinished = (e) => {
    e.target.parentElement.parentElement.style.display = 'none';
  }

  return (
    <div className='target-item__container'>
      <h3 onClick={handleShowChildren} className='target-item__title'>{Title}</h3>
      {showChildren ? Target.map(target => (
        <div className='target-item__subcontainer'>
          <div onClick={() => setCurrentTarget(target)} className='target-item' key={uuidv4()}>
            <p className='target-item__name'>{target.Name} x {target.Quantity}</p>
            <p>{target.Zone} - {target.Subzone}</p>
            <p>Coordinates: x {target.Coordinates.x}, y {target.Coordinates.y}</p>
          </div>
          <div className='x-button__container'>
            <XButton onClick={markFinished} />
          </div>
        </div>
        )
      ) : <p></p>}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentTarget: target => dispatch(setCurrentTarget(target))
});

export default connect(null, mapDispatchToProps)(TargetItem);
