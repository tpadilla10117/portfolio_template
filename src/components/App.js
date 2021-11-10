import React, { useState } from 'react';
import { Navbar} from './utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './App.css';

function App() {


  return (
    <div className="app">
      <Router>
        <Navbar />
      </Router>
  
    </div>
  );
}

export default App;
