import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div className="pagina-contacto">
      {/* Sección de Introducción */}
      <div className="espacio-costados fondo-celeste">
        <div className="introduccion-contacto">
          <h2 className="titulos-1">¡Hablemos!</h2>
          <p className="texto-descriptivo">
            Estamos aquí para responder a todas tus preguntas, escuchar tus comentarios y atender tus necesidades. 
            Puedes contactarnos a través de los siguientes medios:
          </p>
        </div>

        
        <div className="container-contactos">
          <Link target="_blank" className="contacto-item" to="https://instagram.com/trabajos.en.mendoza?igshid=bWg5aThqeGgwMmNw">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/INSTA.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" 
              alt="Instagram" 
              title="Instagram" 
            />
            <p>Instagram</p>
          </Link>

          <Link target="_blank" className="contacto-item" to="mailto:trabajos.en.mendoza@hotmail.com?subject=Consulta%20Web&body=%0A">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/MAIL.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" 
              alt="Email" 
              title="Email" 
            />
            <p>Email</p>
          </Link>

          <Link target="_blank" className="contacto-item" to="https://wa.link/y401jx">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/WSP.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" 
              alt="WhatsApp" 
              title="WhatsApp" 
            />
            <p>WhatsApp</p>
          </Link>
        </div>
      </div>

      {/* Canal de Ofertas */}
      <div className="grid1 espacios-verticales">
        <div className="canal-trabajo">
          <h2 className="titulos-2">Únete a nuestro CANAL DE OFERTAS DE TRABAJO</h2>
          <p className="texto-descriptivo">Haz clic y accede directamente a nuestro canal de WhatsApp para recibir las mejores ofertas.</p>
          <Link target="_blank" to="https://whatsapp.com/channel/0029Vaie6xLCxoAwT5dPKc1U">
            <button className="boton-comenzar">INGRESAR</button>
          </Link>
        </div>
        <div className="imagen-transparente">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/img-grupo.webp?alt=media&token=6629a1a2-ed13-40f9-a505-2610679d88f5" 
            alt="Canal de trabajo" 
          />
        </div>
      </div>

    </div>
  );
};

export default Contacto;
