import React, { useEffect, useState } from 'react';

export default function DigitalClock(): JSX.Element {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');
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
