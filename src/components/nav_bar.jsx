import logo from '../assets/logo.png';

export function NavBar({ onNavigate }) {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate('regular')} className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
        <span className="navbar-title">Meme Generator</span>
      </button>
    </nav>
  );
}
