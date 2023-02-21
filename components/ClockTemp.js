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
  let hours = adjustedTime.getHours();
  let minutes = ('0' + adjustedTime.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  return (
    <div id="clock"  className="justify-center text-9xl p-6 text-gray-200 drop-shadow-lg">
      {`${hours}:${minutes} ${ampm}`}
    </div>
  );
}
