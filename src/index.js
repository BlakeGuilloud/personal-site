import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  About,
  App,
  Articles,
  Resume,
} from './components';

require('./sass/app.css');

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/" component={About} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/resume" component={Resume} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
