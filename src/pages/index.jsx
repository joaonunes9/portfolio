import React, { useState, useEffect } from "react";
import "./index.css";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update body class based on dark mode status
  useEffect(() => {
    // On component mount, check localStorage or set default
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);

    // Apply dark mode to body
    document.body.classList.toggle("dark-mode", storedDarkMode);

    // Cleanup dark mode class on unmount
    return () => document.body.classList.remove("dark-mode");
  }, []);

  // Persist dark mode preference in localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`dark-mode-toggle ${darkMode ? "dark" : ""}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* About Section */}
      <div id="about" className={`section ${darkMode ? "dark-mode" : ""}`}>
        <h2>About Me</h2>
        <div className="section-content">
          <div className="photo">
            <img src="https://via.placeholder.com/150" alt="photo" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut metus non sapien feugiat interdum. Nulla facilisi. Duis vel
              urna ut nisi vehicula malesuada a sed mi. Integer id ante a arcu
              luctus condimentum. Proin et sollicitudin ligula.
            </p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className={`section ${darkMode ? "dark-mode" : ""}`}>
        <h2>Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2025 - 2025</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              nisl vel augue tristique laoreet.
            </p>
          </div>
          <div className="timeline-item">
            <h3>2025 - 2025</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              nisl vel augue tristique laoreet.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className={`section contact ${darkMode ? "dark-mode" : ""}`}
      >
        <h2>Contact</h2>
        <p>Please get in touch through:</p>
        <p>
          <strong>jp.nunes100@gmail.com</strong>
        </p>
        <p>
          <strong>+351 967899879</strong>
        </p>
      </div>
    </>
  );
}
