import React from 'react';
import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Strona Główna
      </NavLink>

      <NavLink
        to="/hot"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Gorące
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        Dodaj mema
      </NavLink>
    </div>
  );
}
