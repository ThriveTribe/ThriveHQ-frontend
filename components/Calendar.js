import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyCalendar() {
  const [date, setDate] = useState(new Date());

  function onDateChange(newDate) {
    setDate(newDate);
  }

  return (
    <div style={{position: 'relative', width: 'auto', height: '200px'}}>
      <div style={{position: 'absolute', bottom: '0', left: '0', width: '300px', height: '200px', padding: '10px'}}>
        <Calendar
          onChange={onDateChange}
          value={date}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
