import React from 'react';
import ReactDOM from 'react-dom';
// import { ReactRouter, BrowserRouter, Route, hashHistory, IndexRoute } from 'react-router-dom'

import {BrowserRouter, Route, hashHistory } from 'react-router-dom';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <div>
      <Route  path='/' component={Main} />
      <Route  path='/' component={Weather} />
      <Route  path='/about' component={About} />
      <Route  path='/examples' component={Examples} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
