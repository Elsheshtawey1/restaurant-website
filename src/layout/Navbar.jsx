import { NavLink } from "react-router-dom";
import React from "react";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/img/logo 1.svg" alt="restaurant logo" />
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/event" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Event
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Button */}
      <div className="nav-button">
        <Button text="Book a table" />
      </div>
    </nav>
  );
};

export default Navbar;
