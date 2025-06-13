import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand brand-glow" to="/">Presento</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link fancy-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fancy-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fancy-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fancy-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fancy-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
