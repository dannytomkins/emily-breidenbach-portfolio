import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import ClassesPage from './pages/ClassesPage';
import LandingPage from './pages/LandingPage';
import StudentWorkPage from './pages/StudentWorkPage';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <link rel='stylesheet' href='https://use.typekit.net/crb6emr.css' />
    </head>
  <App/>
  <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/classes' element={<ClassesPage />} />
          <Route path='/student-work' element={<StudentWorkPage />} />
        </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
