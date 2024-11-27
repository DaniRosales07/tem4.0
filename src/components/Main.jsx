import React from 'react';
import {Route, Routes} from "react-router-dom"
import Contacto from '../pages-jsx/Contacto';
import ItemListContainer from '../servicios/ItemListContainer';
import ItemDetailContainer from '../servicios/ItemDetailContainer'
import Inicio from '../pages-jsx/Inicio';
import Carrito from '../pages-jsx/Compras';

function Main ()
{
  return (

  <main>

<Routes>
<Route path='*' element= { <Inicio/> } />
<Route path='/compras' element= { <Carrito/> } />
<Route path='/servicios' element= { <ItemListContainer/> } />
<Route path='/servicios/:categoria' element= { <ItemListContainer/> } />
<Route path='/item/:id' element= { <ItemDetailContainer /> } />
<Route path='/Contacto' element= { <Contacto/> } />
</Routes>

  </main>
  )
}


export default Main;