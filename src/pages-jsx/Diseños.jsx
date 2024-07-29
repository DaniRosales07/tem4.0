import React from 'react'
import { Link } from "react-router-dom";


const Diseños = () => {
  return (
    <div>

        <div className="centrar-textos">
            <h2 className="titulos"> ¡Todo lo que necesitamos para diseñar tu CV! </h2>
            <h3 className="titulos"> Datos, diseños, y mucho más</h3>
        </div>

        <div className="grid1 espacios-verticales">
            <div className=" centrar-textos">
            <Link target="_blank" to="https://heyzine.com/flip-book/e0208e40bc.html">
            <img className="imagengrande" src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/f1.png?alt=media&token=6629a1a2-ed13-40f9-a505-2610679d88f5" alt="imagen-formulario" title="imagen-formulario"/>
            </Link>
            </div>

            <div className=" centrar-textos">
            <Link target="_blank" to="https://igcoc9io.forms.app/formulario-de-cvs">
            <img className="imagengrande" src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/f2.png?alt=media&token=a557f33d-7565-4893-a76d-f564145c04ed" alt="imagen-formulario" title="imagen-formulario"/>
            </Link>
            </div>

        </div>
    </div>
  )
}

export default Diseños
