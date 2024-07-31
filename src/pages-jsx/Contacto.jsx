import React from 'react'
import { Link } from "react-router-dom";


const Contacto = () => {
  return (
    <div>
        <div className='espacio-costados fondo-celeste'>
            <div>
                <h2 className="titulos-1">¡Hablemos! </h2>
                <h4 className="titulos-1">Estamos aquí para responder a todas tus preguntas, escuchar tus comentarios y atender tus necesidades. Si deseas ponerte en contacto con nosotros, podes hacerlo a través de los siguientes medios: </h4>
            </div>

            <div className='container-contactos'>
            <Link target="_blank" className="contactos" to="https://instagram.com/trabajos.en.mendoza?igshid=bWg5aThqeGgwMmNw">
            <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/INSTA.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" alt="logo-instagram" title="logo-instagram"/>
            </Link>

            <Link target="_blank" className="contactos" to="mailto:trabajos.en.mendoza@hotmail.com?subject=Consulta%20Web&body=%0Amailto:trabajos.en.mendoza@hotmail.com?subject=Consulta%20Web&body=%0A">
            <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/MAIL.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" alt="logo-mail" title="logo-mail"/>
            </Link>

            <Link target="_blank" className="contactos" to="https://wa.link/y401jx">
            <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/WSP.webp?alt=media&token=60f0a59c-c743-4ce8-9d76-4a3c813e14d5" alt="logo-whatsapp" title="logo-whatsapp"/>
            </Link>

            </div>
        </div>

        <div className='grid1 espacios-verticales'>
      <div>
        <h2 className='titulos-2'>También puedes unirte a nuestro CANAL DE OFERTAS DE TRABAJO</h2>
        <h3 className='espacios-verticales'>Hace clíck e ingresa a nuestro CANAL de Ofertas de trabajo en Whatsapp</h3>
        <Link target="_blank" to="https://whatsapp.com/channel/0029Vaie6xLCxoAwT5dPKc1U"><button className='boton-comenzar'>INGRESAR</button></Link>
      </div>
      <div className='imagen-transparente'>
        <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/img-grupo.webp?alt=media&token=6629a1a2-ed13-40f9-a505-2610679d88f5" alt="imagen inicio" />
      
      </div>
      </div>

    </div>
  )
}

export default Contacto
