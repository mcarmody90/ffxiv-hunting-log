import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './target-item.styles.scss';

class TargetItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: true
    }
  }
  
  handleShowChildren = () => {
    this.setState({
      showChildren: !this.state.showChildren
    });
  }

  render(props) {
    return (
      <div className='target-item__container'>
        <h3 onClick={(this.handleShowChildren)} className='target-item__title'>{this.props.children.Title}</h3>
        {this.state.showChildren ? this.props.children.Target.map(target => (
            <div onClick={() => this.props.getZone(target.Zone)} className='target-item' key={uuidv4()}>
              <p className='target-item__name'>{target.Name}</p>
              <p>Quantity: {target.Quantity}</p>
              <p>{target.Zone} - {target.Zone}</p>
              <p>Coordinates: x {target.Coordinates.x}, y {target.Coordinates.y}</p>
            </div>
          )
        ) : <p></p>}
      </div>
    )
  }
}

export default TargetItem;
