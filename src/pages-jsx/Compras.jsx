import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Carrito = () => {

  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState(null);

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleFinalizarCompra = async (data) => {
    if (!data) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete los datos de contacto antes de finalizar la compra.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    setFormData(data);

    const numeroTelefono = '+5492615022513';
    let mensaje = 'Hola, vengo del sitio web de Trabajos en Mendoza, para realizar mi compra.%0A%0ADetalles del contacto:%0A';
    mensaje += `Nombre: ${formData.nombre}%0A`;
    mensaje += `Dirección: ${formData.apellido}%0A`;
    mensaje += `Teléfono: ${formData.telefono}%0A%0ADetalles de la compra:%0A`;

    carrito.forEach(prod => {
      mensaje += `Servicio: ${prod.titulo}%0APrecioUnitario: $${prod.precio}%0ACantidad: ${prod.cantidad}%0APrecio Total: $${prod.precio * prod.cantidad}%0A%0A`;    });

    mensaje += `Total de la compra: $${precioTotal()}`;

    try {
      await addDoc(collection(db, 'compras'), {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        carrito: carrito,
        total: precioTotal(),
        fecha: new Date(),
      });
      Swal.fire({
        title: 'Compra registrada',
        text: 'Los detalles de tu compra han sido enviados a nuestra base de datos',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      vaciarCarrito();

    } catch (error) {
      console.error('Error al guardar la compra en la base de datos: ', error);
      Swal.fire({
        title: 'Error',
        text: 'Error al enviar pedido a base de datos',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }

    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section className='espacios-verticales'>
      <div className="container-formulario">
        <h2 className="titulos"> Datos de Compra</h2>
        <h4 className='titulos'>No olvides llenar los datos de contacto para comunicarnos con vos</h4>
        <form className="formulario" onSubmit={handleSubmit(handleFinalizarCompra)}>
          <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre", { required: true })} />
          <input type="text" placeholder="Ingresa tu apellido" {...register("apellido", { required: true })} />
          <input type="phone" placeholder="Ingresa tu Teléfono" {...register("telefono", { required: true })} />
        </form>
      </div>

      <div className='grid2'>
        <div>
          <div>
            {
              carrito.map((prod) => (
                <div className='carrito-container' key={prod.id}>
                  <h4>{prod.titulo}</h4>
                  <p>Precio Uni: $ {prod.precio}</p>
                  <p>Cant: {prod.cantidad}</p>
                  <p>Precio Total: $ {prod.precio * prod.cantidad}</p>
                  <br />
                </div>
              ))
            }
            {
              carrito.length > 0 ?
                <div className='total-compra'>
                  <h3>Total Compra: $ {precioTotal()}</h3>
                  <button className='boton-contador' onClick={handleSubmit(handleFinalizarCompra)}>Realizar Compra</button>
                  <button className='boton-contador' onClick={handleVaciar}>Vaciar Carrito</button>
                </div> :
                <div>
                  <h2 className='titulos'> ¿Aún no hay artículos? Continúa explorando para aprovechar todas nuestras ofertas  </h2>
                  <Link to="/servicios/busqueda-laboral"><button className='boton-comenzar'>Comenzar</button></Link>
                </div>
            }
          </div>
        </div>
        <div className='imagen-transparente'>
          <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/img-inicio.png?alt=media&token=6629a1a2-ed13-40f9-a505-2610679d88f5" alt="imagen inicio" />
        </div>
      </div>
    </section>
  );
};

export default Carrito;