import React from "react";
import { useRef } from 'react';
import "./Navbar.css";
import { Link, useNavigate, } from "react-router-dom";

function Navbar() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="nav">
        <nav className="navbar">
          <ul className="navlist">
            <li className="navbarList">
                <Link to="/">Home</Link>
            </li>
            <li className="navbarList">
                <Link to="/about">About</Link>
            </li>
            <li className="navbarList">
                <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
          <button className="btn" onClick={scrollToContact}>Contact</button>
        </div>
    </div>
  );
}

export default Navbar;
