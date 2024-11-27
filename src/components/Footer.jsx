import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/compras">Compras</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>+549 2615022513</p>
          <p>trabajosenmendoza@hotmail.com</p>
          <p>Godoy Cruz, Mendoza, Argentina</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61555420775338&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/trabajos.en.mendoza?igshid=bWg5aThqeGgwMmNw" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/danielrosales2024?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>©2024 Trabajos en Mendoza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;