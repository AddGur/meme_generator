import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import '../styles/Meme.css';

export function Meme({ meme, onUpvote, onDownvote }) {
  return (
    <div className="meme-card">
      <div className="meme-image-container">
        <img src={meme.imageUrl} alt={meme.title} className="meme-image" />
      </div>
      <div className="meme-title-actions">
        <h3 className="meme-title">{meme.title}</h3>
        <div className="meme-actions">
          <button
            onClick={() => onUpvote(meme.id)}
            className="vote-button upvote"
            title="Upvote"
          >
            <ThumbsUp size={20} />
            <span className="vote-count">{meme.upvotes}</span>
          </button>
          <button
            onClick={() => onDownvote(meme.id)}
            className="vote-button downvote"
            title="Downvote"
          >
            <ThumbsDown size={20} />
            <span className="vote-count">{meme.downvotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
