import { useEffect, useState } from 'react';

export function MemeForm({ onSubmit, memesLength }) {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const handleSubmit = () => {
    if (!imageUrl && !file) {
      return false;
    }
    const formData = {
      id: memesLength + 1,
      title,
      imageUrl: file ? URL.createObjectURL(file) : imageUrl,
      upvotes: 0,
      downvotes: 0,
    };
    onSubmit(formData);
    setTitle('');
    setImageUrl('');
    setFile(null);
    setPreviewUrl('');
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageUrl('');
    }
  };

  const validateImageUrl = async (url) => {
    try {
      const response = await fetch(url);
      const contentType = response.headers.get('content-type');
      return contentType.startsWith('image/');
    } catch {
      return false;
    }
  };

  const handleUrlChange = async (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setFile(null);

    if (url) {
      const isValid = await validateImageUrl(url);
      if (isValid) {
        setPreviewUrl(url);
        setUrlError('');
      } else {
        setPreviewUrl('');
        setUrlError('Nieprawidłowy link do zdjęcia');
      }
    } else {
      setPreviewUrl('');
      setUrlError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="meme-form">
      <div className="form-group">
        <label className="form-label">Tytuł</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Link do zdjęcia</label>
        <input
          type="url"
          value={imageUrl}
          onChange={handleUrlChange}
          className="form-input"
          disabled={file !== null}
          required={file == null}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Dodaj zdjęcie z dysku</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="form-input"
          disabled={imageUrl !== ''}
          required={imageUrl === ''}
        />
      </div>{' '}
      {urlError && <p className="url-error">{urlError}</p>}
      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="podgląd" className="preview-image" />
        </div>
      )}
      <button type="submit" className="submit-button">
        Dodaj mema
      </button>
    </form>
  );
}
