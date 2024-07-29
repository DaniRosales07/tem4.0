import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarTogglerDemo03"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand" to="/">Trabajos en Mendoza</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to="/">INICIO</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICIOS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/servicios/busqueda-laboral">Búsqueda Laboral</Link></li>
                <li><Link className="dropdown-item" to="/servicios/emprendedores-digitales">Emprendedores Digitales</Link></li>
                <li><Link className="dropdown-item" to="/servicios/busqueda-personal">Búsqueda de Personal</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to="/Diseños">DISEÑO</Link>
            </li>

            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to="/Contacto">CONTACTO</Link>
            </li>

            <li className="nav-item carrito-mobile">
            <Link aria-current="page" className="nav-link active" to="/compras">COMPRAS</Link>
            </li>
            <li className="nav-item carrito-escritorio">
            <Link aria-current="page" className="nav-link active" to="/compras">COMPRAS</Link>
            </li>
            <li className="nav-item carrito-escritorio">
            <Link to="/compras" className="nav-link active"> <CartWidget/> </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;