import React from 'react';
import { Meme } from '../components/Meme.jsx';
export function HotPage({ hotMemes, handleUpvote, handleDownvote }) {
  return (
    <div className="memes-container">
      {hotMemes.length > 0 ? (
        hotMemes.map((meme) => (
          <Meme
            key={meme.id}
            meme={meme}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
          />
        ))
      ) : (
        <div className="no-memes">Nie ma dobrych memów :( </div>
      )}
    </div>
  );
}
