import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./index.css";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-menu ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">JN</h1>

      {isMobile && (
        <div className="nav-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

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
        {isMobile && (
          <li>
            <button className="cv-button">Download CV</button>
          </li>
        )}
      </ul>
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
