import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/img/logo 1.svg" alt="Restaurant logo and brand" loading="lazy" />
        </div>

        {/* Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* Nav Links */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <NavLink to="/menu" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/event" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                Event
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-button">
            <Button aria-label="Book a table" text="Book a table" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
