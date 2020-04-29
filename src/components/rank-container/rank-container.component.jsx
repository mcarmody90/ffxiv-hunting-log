import React from 'react';
import RankItem from '../rank-item/rank-item.component';
import './rank-container.styles.scss';

class RankContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return false;
    } else {
      return true;
    }
  }
  
  render() {
    return (
      <div className='rank-container'>
        {console.log('rankNames from rank-container', this.props.rankNames)}
        {console.log('rankData from rank-container', this.props.rankData)}
        {this.props.rankNames.map(rank => <RankItem key={rank} data={this.props.rankData} getZone={this.props.getZone}>{rank}</RankItem>)}
      </div>
    )
  }
}

export default RankContainer;