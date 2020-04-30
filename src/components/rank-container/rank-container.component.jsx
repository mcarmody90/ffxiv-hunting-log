import React from 'react';
import RankItem from '../rank-item/rank-item.component';
import './rank-container.styles.scss';

const RankContainer = ({ rankNames, rankData }) => (
  <div className="rank-container">
    {rankNames.map(rank => 
      <RankItem key={rank} data={rankData}>{rank}</RankItem>
    )}
  </div>
);

export default RankContainer;