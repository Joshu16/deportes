import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <span className="logo-icon">⚽</span>
        <h2 className="header-logo">Complejo CIT</h2>
      </Link>

      <nav className="header-nav">
        <Link to="/" className="header-link">Inicio</Link>
        <Link to="/reservar" className="header-link header-link--cta">Reservar</Link>
      </nav>
    </header>
  );
}

export default Header;
