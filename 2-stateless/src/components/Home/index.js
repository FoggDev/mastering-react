import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    const styles = {
      backgroundColor: 'red',
      border: '1px solid yellow'
    };

    return (
      <>
        <h1 className="Home">I'm Home Component</h1>
        <h2 style={styles}>Otro encabezado</h2>
      </>
    );
  }
}

export default Home;
