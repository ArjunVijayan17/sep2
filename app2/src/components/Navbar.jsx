import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div class="navbar">
        <ul class="navlist">
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar