import React from 'react';
import './CategoriesCard.css';

const CategoriesCard = () => {
  const categories = [
    { icon: '📁', name: 'Work', avatars: ['A', 'B'] },
    { icon: '🏠', name: 'Personal', avatars: ['C'] },
  ];

  return (
    <div>
      <div className="card-title">
        <h3>My categories</h3>
      </div>
      <div className="categories-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-item">
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
            <div className="avatar-stack">
              {cat.avatars.map((avatar, i) => <div key={i} className="avatar">{avatar}</div>)}
            </div>
          </div>
        ))}
        <button className="btn btn-primary">+ Add more</button>
      </div>
    </div>
  );
};

export default CategoriesCard;
