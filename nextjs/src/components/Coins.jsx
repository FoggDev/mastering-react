import React, { Component } from 'react';
import { array } from 'prop-types';

import './Coins.scss';

const Coins = ({ coins }) => (
  <div className="Coins">
    <h1>Top 100 Coins</h1>

    <ul>
      {coins.map((coin, key) => (
        <li key={`coin-${key}`}>
          <span className="left">
            {coin.rank} {coin.name}
            <strong>{coin.symbol}</strong>
          </span>

          <span className="right">${coin.price_usd}</span>
        </li>
      ))}
    </ul>
  </div>
);

Coins.propTypes = {
  coins: array
};

export default Coins;
