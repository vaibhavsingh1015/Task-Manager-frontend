import React from 'react';
import './CalendarCard.css';

const CalendarCard = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({length: 31}, (_, i) => i + 1);

  return (
    <div>
      <div className="card-title">
        <h3>March 2022</h3>
        <div className="nav-arrows">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>
      <div className="calendar-grid">
        {days.map(day => <div key={day} className="day-header">{day}</div>)}
        {dates.map(date => <div key={date} className={`date-cell ${date === 15 ? 'today' : ''}`}>{date}</div>)}
      </div>
    </div>
  );
};

export default CalendarCard;
