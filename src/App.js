import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import ClassesPage from './pages/ClassesPage';
import LandingPage from './pages/LandingPage';
import StudentWorkPage from './pages/StudentWorkPage';

const App = () => {
  // return (
  //   <Router>
  //       <Navbar />
  //       <Routes>
  //         <Route path='/' element={<LandingPage />} />
  //         <Route path='/classes' element={<ClassesPage />} />
  //         <Route path='/student-work' element={<StudentWorkPage />} />
  //       </Routes>
  //   </Router>
  // );
};

export default App;
