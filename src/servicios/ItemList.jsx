import React from 'react'
import Item from './Item'


const ItemList = ({servicios, titulo}) => {
  return (
    <div className='container-servicios fondo-blanco espacios-verticales'>
      <h2 className='titulos-2'> Sección {titulo}</h2>
      <p className='espacios-verticales espacios-costados centrar-contenido'>Además de excelentes servicios, cursos y ofertas, brindamos garantía de nuestro trabajo y seguridad en cada compra</p>

      <div className='servicios espacios-verticales'>
        {servicios.map((prod) => <Item servicio= {prod} key={prod.id}  />)}
      </div>
    </div>
  )
}

export default ItemList
