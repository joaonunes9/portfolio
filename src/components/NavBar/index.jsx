import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // Close menu when switching to desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-menu ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">JN</h1>

      {/* Hamburger Icon (only visible on mobile) */}
      {isMobile && (
        <div className="nav-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      {/* Navigation Menu */}
      <ul className={`nav-menu-desktop ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
        {/* Show CV Button in menu for mobile users */}
        {isMobile && (
          <li>
            <button className="cv-button">Download CV</button>
          </li>
        )}
      </ul>

      {/* Right-side Buttons (Only visible on desktop) */}
      {!isMobile && (
        <div className="nav-actions">
          <button className="cv-button">Download CV</button>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <FaMoon className="icon" />
            ) : (
              <FaSun className="icon" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
