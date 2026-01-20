import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
  <div className="footer-container">

    <div className="footer-top">
      <img src={logo} alt="logo" />
      <div className="footer-nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/prepare">Prepare</a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <div className="footer-social">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>

    <div className="footer-divider" />

    <div className="footer-bottom">
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
        <a href="/legal">Legal</a>
      </div>
      <span className="footer-copy">
        © 2024 Codegnan Destination. All rights reserved.
      </span>
    </div>

  </div>
</footer>

  );
};

export default Footer;
