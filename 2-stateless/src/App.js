import React from 'react';

// Components
import Todo from './components/Todo';

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
        <Todo />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
