import React from 'react';
import '../styles/Navigation.css';

export function SideBar({ currentRoute, onNavigate }) {
  return (
    <div className="sidebar">
      <div
        onClick={() => onNavigate('regular')}
        className={`nav-link ${currentRoute === 'regular' ? 'active' : ''}`}
      >
        Strona Główna
      </div>
      <div
        onClick={() => onNavigate('hot')}
        className={`nav-link ${currentRoute === 'hot' ? 'active' : ''}`}
      >
        Gorące
      </div>
      <div
        onClick={() => onNavigate('form')}
        className={`nav-link ${currentRoute === 'form' ? 'active' : ''}`}
      >
        Dodaj mema
      </div>
    </div>
  );
}
