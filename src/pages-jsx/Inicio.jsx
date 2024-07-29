import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../servicios/ItemListContainer';
import ItemDetailContainer from '../servicios/ItemDetailContainer';
import TestimonialSlider from '../components/Testimonios';

const Inicio = () => {
  return (
    <section >
      <div className='grid1'>
      <div>
        <h1 className='titulos'>Bienvenidos a Trabajos en Mendoza</h1>
        <h4 className='espacios-verticales'>Donde tu trabajo es NUESTRO trabajo. <br /> ¿Qué estas esperando para probar nuestros servicios?</h4>
        <Link to="/servicios/busqueda-laboral"><button className='boton-comenzar'>Comenzar</button></Link>
      </div>
      <div className='imagen-transparente'>
        <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/img-inicio.png?alt=media&token=6629a1a2-ed13-40f9-a505-2610679d88f5" alt="imagen inicio" />
      
      </div>
      </div>


      <div className='container-ofertas'>
      <Routes>
        <Route path='/' element={<ItemListContainer categoria="destacados" />} />
        <Route path='/servicios' element={<ItemListContainer />} />
        <Route path='/servicios/:categoria' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      </div>

      <div>
        <TestimonialSlider/>
      </div>
    </section>
  );
};

export default Inicio;