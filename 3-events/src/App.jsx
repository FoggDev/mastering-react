import React from 'react';

// Components
// import Todo from './components/Todo';
// import Coins from './components/Coins';
// import Numbers from './components/Numbers';
// import Xss from './components/Xss';
import Person from './components/Person';

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
        <Person />
      </Content>

      <Footer />
    </div>
  );
}

export default App;
