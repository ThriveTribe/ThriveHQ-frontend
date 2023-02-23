import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const adjustedTime = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
  const hours = adjustedTime.getHours() % 12 || 12;
  const minutes = ('0' + adjustedTime.getMinutes()).slice(-2);
  const ampm = adjustedTime.getHours() >= 12 ? 'PM' : 'AM';
  const month = adjustedTime.toLocaleString('en-US', { month: 'short' });
  const day = adjustedTime.getDate();
  const year = adjustedTime.getFullYear();

  return (
    <div id="clock" className="justify-center text-9xl p-6 text-gray-200 drop-shadow-lg">
      <div>{`${hours}:${minutes} ${ampm}`}</div>
      <div style={{ fontSize: '24px' }}>{`${month} ${day}, ${year}`}</div>
    </div>
  );
}
