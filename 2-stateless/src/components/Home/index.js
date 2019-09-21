import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Carlos'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Hiram'
      });
    }, 3000);
  }

  render() {
    console.log('my state===', this.state.name);

    return (
      <>
        <p>Hi my name is: {this.state.name}</p>
      </>
    );
  }
}

export default Home;
