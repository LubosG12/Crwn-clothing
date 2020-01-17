import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route exact path='/'>
          <HomePage />
       </Route>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
