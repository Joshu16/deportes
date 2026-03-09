import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="nav">
      <Link to="/" className="logo">
        <h2 className="logo-txt">Complejo CIT</h2>
      </Link>

      <nav className="links">
        <Link to="/" className="link">Inicio</Link>
        <Link to="/reservar" className="link btn">Reservar</Link>
      </nav>
    </header>
  );
}

export default Header;
