import React from 'react';
import RankItem from '../rank-item/rank-item.component';
import './rank-container.styles.scss';

export default ({rankNames, rankData}) => {
  return (
    <div className='rank-container'>
      {console.log('rankNames from rank-container', rankNames)}
      {console.log('rankData from rank-container', rankData)}
      {rankNames.map(rank => <RankItem key={rank} data={rankData}>{rank}</RankItem>)}
    </div>
  )
}
