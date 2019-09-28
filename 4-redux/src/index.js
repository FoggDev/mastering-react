import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';

// Redux Store
import configureStore from './shared/redux/configureStore';

// Routes
import AppRoutes from './routes';

// Configuring Redux Store
const store = configureStore(window.initialState);

const rootElement = document.getElementById('root');

const renderApp = Component => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>
  , rootElement);
};

renderApp(AppRoutes);
