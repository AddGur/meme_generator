import React from 'react';
import { Meme } from '../components/Meme.jsx';
export function RegularPage({ memes, handleUpvote, handleDownvote }) {
  return (
    <div className="memes-container">
      {memes.map((meme) => (
        <Meme
          key={meme.id}
          meme={meme}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      ))}
    </div>
  );
}
