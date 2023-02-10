import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className='navbar'>
      <ul className='navlist'>
        <li id='nav-main'>
          <Link to='/'>Emily Breidenbach</Link>
        </li>
      </ul>
      <ul className='navlist'>
        <li>
          <Link to='/'>ABOUT</Link>
        </li>
        <li>
          <Link to='/work'>PORTFOLIO</Link>
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
