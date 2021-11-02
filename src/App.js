import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'screens';
import routes from 'screens/routes';
import './App.css';

export default () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path={routes.home} component={Home} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};
