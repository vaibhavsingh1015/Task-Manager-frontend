import React from 'react';
import './TrackingCard.css';

const TrackingCard = () => {
  const timers = [
    { title: 'Project A', time: '00:30:15', active: true },
    { title: 'Project B', time: '01:15:00', active: false },
  ];

  return (
    <div>
      <div className="card-title">
        <h3>My tracking</h3>
      </div>
      <div className="timers-list">
        {timers.map((timer, index) => (
          <div key={index} className={`timer-item ${timer.active ? 'active' : ''}`}>
            <div>
              <h4>{timer.title}</h4>
              <p>{timer.time}</p>
            </div>
            <div className="timer-controls">
              <button className="play-pause">{timer.active ? '⏸' : '▶'}</button>
              <span className="kebab">⋯</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingCard;
