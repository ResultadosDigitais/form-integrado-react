import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IntegratedForm from './components/integrated-form';
import MotitoringCodeForm from './components/monitoring-code-form';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/monitoring-code-form" component={MotitoringCodeForm} />
          <Route path="/integrated-form" exact={true} component={IntegratedForm} />
          <Route path='*' component={IntegratedForm} />
      </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
