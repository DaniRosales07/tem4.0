import ItemCount from "./ItemCount";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
    setCantidad(1); 
    Swal.fire({
      title: 'Agregado',
      text: 'El servicio ha sido agregado al carrito.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  return (
    <section className="centrar-contenido">
      <div>
        <h2 className="titulos espacios-verticales"> Detalles del Servicio</h2>
      </div>

      <div className="container-servicio-detail">
        <div className='servicio-detail'>
          <img src={item.imagen} alt={item.titulo} />
          <div className="servicio-detail-div">
            <h3 className="titulos">{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <h3>Valor: $ {item.precio}</h3>
            <ItemCount 
              cantidad={cantidad} 
              handleSumar={handleSumar} 
              handleRestar={handleRestar} 
              handleAgregar={handleAgregar} 
            />
          </div>
        </div>
      </div>
      <div className="centrar-contenido espacios-verticales">
        <Link to="/"><button className="boton-comenzar">Volver</button></Link>
      </div>
    </section>
  );
}

export default ItemDetail;