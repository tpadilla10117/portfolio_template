import React from 'react';
import { Home, SigninPage } from './utils';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* import { CSSTransition } from 'react-transition-group'; */

import './App.css';

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        {/* TODO: Meant to be a page to login / create an account: */}
          <Route path="/signin" component={SigninPage} exact/>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
