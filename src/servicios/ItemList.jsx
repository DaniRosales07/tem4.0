import React from 'react'
import Item from './Item'


const ItemList = ({servicios, titulo}) => {
  return (
    <div className='container-servicios fondo-blanco espacios-verticales'>
      <h2 className='titulos-2'> Sección {titulo}</h2>
      <h4 className='espacios-verticales centrar-contenido'>Además de excelentes servicios, brindamos garantía de nuestro trabajo y seguridad en cada entrega</h4>

      <div className='servicios espacios-verticales'>
        {servicios.map((prod) => <Item servicio= {prod} key={prod.id}  />)}
      </div>
    </div>
  )
}

export default ItemList
