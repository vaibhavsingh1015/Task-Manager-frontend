import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="actions">
        <button className="btn btn-primary">+ New task</button>
        <span className="icon">💬</span>
      </div>
      <div className="pro-badge">Pro</div>
    </header>
  );
};

export default Header;
