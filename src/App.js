import React, { useState } from 'react';

import './styles/Layout.css';
import './styles/Form.css';
import memeData from './assets/assets.json';
import { SideBar } from './components/side_bar.jsx';
import { Meme } from './components/meme.jsx';
import { Footer } from './components/footer.jsx';
import { MemeForm } from './components/meme_form.jsx';
import { NavBar } from './components/nav_bar.jsx';

const App = () => {
  const [memes, setMemes] = useState(memeData);
  const [currentRoute, setCurrentRoute] = useState('regular');

  const handleUpvote = (id) => {
    setMemes(
      memes.map((meme) =>
        meme.id === id ? { ...meme, upvotes: meme.upvotes + 1 } : meme
      )
    );
  };

  const handleDownvote = (id) => {
    setMemes(
      memes.map((meme) =>
        meme.id === id ? { ...meme, downvotes: meme.downvotes + 1 } : meme
      )
    );
  };

  const handleAddMeme = (newMeme) => {
    setMemes([newMeme, ...memes]);
    setCurrentRoute('regular');
  };

  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  const renderContent = () => {
    switch (currentRoute) {
      case 'regular':
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
      case 'hot':
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
      case 'form':
        return <MemeForm onSubmit={handleAddMeme} memesLength={memes.length} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <NavBar onNavigate={setCurrentRoute} />
      <SideBar currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      <main className="main-content">{renderContent()}</main>
      <Footer></Footer>
    </div>
  );
};

export default App;
