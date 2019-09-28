import React from 'react';
import { element } from 'prop-types';

// Shared Components
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Content from './shared/components/layout/Content';

import './App.css';

const App = ({ children }) => (
  <div className="App">
    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element.isRequired
};

export default App;
