import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>Navbar</div>
    <ul>
      <li>
        <Link to='/'>Meeb</Link>
      </li>
      <li>
        <Link to='/classes'>CLASSES</Link>
      </li>
      <li>
        <Link to='/student-work'>STUDENT WORK</Link>
      </li>
    </ul>
    <div>Navbar end</div>
    </>
  )
}

export default Navbar