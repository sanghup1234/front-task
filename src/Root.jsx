import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

// lazy-load
const Todo = lazy(() => import('./pages/Todo'));
const Movie = lazy(() => import('./pages/Movie'));

const Root = () => (
  <Router>
    <Suspense fallback="loading...">
      <Header />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/todo" component={Todo} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
