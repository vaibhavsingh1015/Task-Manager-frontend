import React from 'react';
import './CommentsCard.css';

const CommentsCard = () => {
  const comments = [
    { title: 'New comment on task', excerpt: 'This is a sample comment...', chevron: '›' },
    { title: 'Another comment', excerpt: 'More details here...', chevron: '›' },
  ];

  return (
    <div>
      <div className="card-title">
        <h3>New comments</h3>
      </div>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <div>
              <h4>{comment.title}</h4>
              <p>{comment.excerpt}</p>
            </div>
            <span>{comment.chevron}</span>
          </div>
        ))}
        <button className="btn btn-primary">+ Add</button>
      </div>
    </div>
  );
};

export default CommentsCard;
