import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {
  state = {
    dollars: 0
  };

  shouldComponentUpdate(props, state) {
    return state.dollars % 10 === 0;
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({
      dollars: Number(value || 0)
    });
  }

  render() {
    console.log('RENDER');
    return (
      <div className="Coins">
        <h1>Buy Coins</h1>

        <div className="question">
          <p>¿Cuantos dolares tienes?</p>

          <p>
            <input
              placeholder="0"
              onChange={this.handleOnChange}
              type="number"
            />
          </p>
        </div>

        <div className="answer">
          <p>Precio del Bitcoin: $10</p>

          <p>
            Puedes comprar <strong>{this.state.dollars / 10}</strong> monedas.
          </p>
        </div>
      </div>
    )
  }
}

export default Coins;
