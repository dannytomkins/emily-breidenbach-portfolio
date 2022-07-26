import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    // "width":"100%",
    background: 'red',
    display: 'flex',
    // "flexWrap":"wrap",
    justifyContent: 'space-between',
  };
  const navHomeStyle = {
    'align-self': 'flex-start',
    padding: '4px',
  };
  const navListStyle = {
    listStyle: 'none',
    padding: '4px',
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <>
      <div style={navbarStyle}>
        <Link to='/'>Emily Briedenbach</Link>
        <ul style={navListStyle}>
          <li>
            <Link to='/'>ABOUT</Link>
          </li>
          <li>
            <Link to='/classes'>CLASSES</Link>
          </li>
          <li>
            <Link to='/student-work'>STUDENT WORK</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
