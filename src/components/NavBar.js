import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Coding Competitions</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
      </div>
    </nav>
  );
};

export default NavBar;
