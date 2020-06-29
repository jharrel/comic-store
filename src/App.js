import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const ComicsPage = () => (
  <div>
    <h1>Comics Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={ComicsPage} />
      </Switch>
    </div>
  );
}

export default App;