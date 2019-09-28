import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Home from './components/Home';

// Containers
import CoinsContainer from './containers/coinsContainer';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/coins" component={CoinsContainer} exact />
    </Switch>
  </App>
);

export default AppRoutes;
