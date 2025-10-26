import React, { useEffect, useState } from 'react';

export default function DigitalClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => n.toString().padStart(2, '0');
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return (
    <div className="clock">
      <div className="time">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}
