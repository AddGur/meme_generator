import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="memLogo" className="navbar-logo-image" />
        <span className="navbar-title">Meme Generator</span>
      </NavLink>
    </nav>
  );
}
