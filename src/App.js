import React, { useState } from 'react';

import './styles/Layout.css';
import './styles/Form.css';
import memeData from './assets/assets.json';
import { SideBar } from './components/SideBar.jsx';
import { Footer } from './components/Footer.jsx';
import { NavBar } from './components/NavBar.jsx';
import { HotPage } from './pages/Hot.jsx';
import { FormPage } from './pages/Form.jsx';
import { RegularPage } from './pages/Regular.jsx';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const [memes, setMemes] = useState(memeData);

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
  };

  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <SideBar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <RegularPage
                  memes={memes}
                  handleUpvote={handleUpvote}
                  handleDownvote={handleDownvote}
                />
              }
            />
            <Route
              path="/hot"
              element={
                <HotPage
                  hotMemes={hotMemes}
                  handleUpvote={handleUpvote}
                  handleDownvote={handleDownvote}
                />
              }
            />
            <Route
              path="/form"
              element={<FormPage memes={memes} handleAddMeme={handleAddMeme} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
