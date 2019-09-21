import React from 'react';

// Components
import Home from './components/Home/';
import Hello from './components/Hello/';

// Shared Components
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Content from './shared/components/layout/Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Content>
        <Home />
        <Hello name="Carlos" age={31} />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
