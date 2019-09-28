import React, { Component } from 'react';
import { array } from 'prop-types';

import { isFirstRender } from '../../shared/utils/frontend';

import './Coins.css';

class Coins extends Component {
  componentWillMount() {
    const { fetchCoins } = this.props;

    fetchCoins();
  }

  render() {
    const {
      coins
    } = this.props;

    if (isFirstRender(coins)) {
      return <span>Loading data...</span>;
    }

    return (
      <div className="Coins">
        <h1>Top 100 Coins</h1>

        <ul>
          {coins.map((coin, key) => (
            <li key={`coin-${key}`}>
              <span className="left">
                {coin.rank} {coin.name} {coin.symbol}
              </span>

              <span className="right">
                ${coin.price_usd}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Coins.propTypes = {
  coins: array
};

export default Coins;
