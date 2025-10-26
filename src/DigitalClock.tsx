import React, { useState, useEffect } from 'react';

export default function DigitalClock(): JSX.Element {
  const [now, setNow] = useState<Date>(new Date());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`app-container ${
        isDarkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      <div className="header">
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
      <div className="clock">
        <div className="time">
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    </div>
  );
}
