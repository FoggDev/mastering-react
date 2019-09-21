import React, { Component } from 'react';
import Result from './Result';

import './Numbers.css';

class Numbers extends Component {
  state = {
    numbers: '',
    results: []
  };

  handleOnChange = ({ target: { value } }) => {
    // 123456 => [1, 2, 3, 4, 5, 6]
    const numbers = Array.from(value);

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    })
  }

  render() {
    return (
      <div className="Numbers">
        <input type="number" value={this.state.numbers} onChange={this.handleOnChange} />

        <ul>
          {this.state.results.map((result, key) => (
            <Result key={`result-${key}`} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Numbers;
