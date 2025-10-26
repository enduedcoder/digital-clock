import React, { useState } from 'react';
import DigitalClock from './DigitalClock';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((s) => !s);

  return (
    <div
      className={`app-container ${
        isDarkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <div className="header">
        <h1>Digital Clock</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            isDarkMode
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'
          }
        >
          <span>{isDarkMode ? '💡' : '🌙'}</span>
        </button>
      </div>

      <DigitalClock />
    </div>
  );
}
