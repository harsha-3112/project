import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">

        {/* Logo */}
        <img src={Logo} alt="CodeArena Logo" className="nav-logo" />

        {/* Menu */}
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive("/") ? "active-nav" : ""}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active-nav" : ""}`}>
            About Us
          </Link>
          <Link to="/coding" className={`nav-link ${isActive("/coding") ? "active-nav" : ""}`}>
            Coding
          </Link>
          <Link to="/mcq" className={`nav-link ${isActive("/mcq") ? "active-nav" : ""}`}>
            MCQ’S
          </Link>
        </div>

        {/* Buttons */}
        <div className="nav-btn-group">
          <Link to="/signup" className="btn-signup">Signup</Link>
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
