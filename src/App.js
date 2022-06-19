import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ClassesPage from './pages/ClassesPage';
import LandingPage from './pages/LandingPage';
import StudentWorkPage from './pages/StudentWorkPage';

const App = () => {
  return (
    <>
      <div>App</div>
      <Router>
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        <Switch>
          <Route exact path='/classes' component={ClassesPage} />
          <Route exact path='/student-work' component={StudentWorkPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
