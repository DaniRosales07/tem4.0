import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TRABAJOS EN MENDOZA</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">INICIO</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICIOS
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/servicios/busqueda-laboral">Búsqueda Laboral</Link></li>
                <li><Link className="dropdown-item" to="/servicios/emprendedores-digitales">Emprendedores Digitales</Link></li>
                <li><Link className="dropdown-item" to="/servicios/busqueda-personal">Búsqueda de Personal</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/servicios/cursos">CURSOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/compras">COMPRAS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Contacto">CONTACTO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;