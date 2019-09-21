import React, { Component } from 'react';
import { string, number } from 'prop-types';

class Hello extends Component {
  static propTypes = {
    name: string.isRequired,
    age: number.isRequired
  };

  render() {
    const { name, age } = this.props;

    return <p>Hola, {name}!, tienes {age} años</p>;
  }
}

export default Hello;
