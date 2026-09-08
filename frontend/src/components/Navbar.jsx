import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content container">

        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-decoration">✦</div>

          <span className="logo-title">
            Samastipur Mehndi
          </span>

          <span className="logo-subtitle">
            BY ANSHU PRIYA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#services" onClick={closeMenu}>
            Packages
          </a>

          <a href="#aftercare" onClick={closeMenu}>
            Henna Care
          </a>

          <a href="#reviews" onClick={closeMenu}>
            Reviews
          </a>

          <a
            href="#booking"
            className="nav-book-btn"
            onClick={closeMenu}
          >
            Book Your Date
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}