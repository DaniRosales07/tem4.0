import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

const Item = ({ servicio }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < servicio.stock && setCantidad(cantidad + 1);
  }

  const handleAgregar = () => {
    agregarAlCarrito(servicio, cantidad);
    setCantidad(1); 
    Swal.fire({
      title: 'Agregado',
      text: 'El servicio ha sido agregado al carrito.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  return (
    <div className='servicio'>
      <img src={servicio.imagen} alt={servicio.titulo} />
      <div className='centrar-contenido'>
        <p>{servicio.titulo}</p>
        <h3>$ {servicio.precio}</h3>
        <div className='div-carrito'> 
          <div className='centrar-contenido'>
          <button className='boton-servicios'>
            <Link className='vermas' to={`/item/${servicio.id}`}>Ver más</Link> 
            </button>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleRestar={handleRestar}
              handleAgregar={handleAgregar}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
 
