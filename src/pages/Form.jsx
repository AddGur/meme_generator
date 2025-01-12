import React from 'react';
import { MemeForm } from '../components/MemeForm.jsx';
export function FormPage({ memes, handleAddMeme }) {
  return <MemeForm onSubmit={handleAddMeme} memesLength={memes.length} />;
}
