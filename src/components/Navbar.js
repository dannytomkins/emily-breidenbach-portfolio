import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navListStyle = {
    listStyle: 'none',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <nav class="navbar">
      <ul style={navListStyle}>
        <li>
          <Link to='/'>Emily Briedenbach</Link>
        </li>
      </ul>
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
    </nav>
  );
};

export default Navbar;
