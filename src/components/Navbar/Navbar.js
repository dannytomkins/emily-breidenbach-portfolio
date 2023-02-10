import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        Emily Breidenbach
      </Link>

      <div className='links'>
        <Link to='/'>ABOUT</Link>

        <Link to='/work'>PORTFOLIO</Link>

        <Link to='/classes'>CLASSES</Link>

        <Link to='/student-work'>STUDENT WORK</Link>
      </div>

      <div className="icon" onClick={handleToggle}>
        <span>{isOpen ? "\u2715" : "\u2630"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
        <Link to='/' onClick={handleToggle}>ABOUT</Link>
        <Link to='/work' onClick={handleToggle}>PORTFOLIO</Link>
        <Link to='/classes' onClick={handleToggle}>CLASSES</Link>
        <Link to='/student-work' onClick={handleToggle}>STUDENT WORK</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
