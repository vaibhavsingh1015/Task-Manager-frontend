import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <div className="logo-circle">O</div>
          <span className="logo-text">Organizo</span>
        </div>
        <nav className="nav">
          <ul>
            <li className="nav-item active">
              <span className="nav-icon">📋</span>
              <span className="nav-label">Tasks</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📅</span>
              <span className="nav-label">Calendar</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">💬</span>
              <span className="nav-label">Comments</span>
            </li>
            <li className="nav-item">
              <span className="nav-icon">📊</span>
              <span className="nav-label">Tracking</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
