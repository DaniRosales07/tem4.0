import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'




const CartWidget = () => {

    const {cantidadServicios} = useContext (CartContext);

  return (
    <div className='carrito-navbar'>
        <Link to="/compras">
        <img src="https://firebasestorage.googleapis.com/v0/b/trabajosenmendoza-9801f.appspot.com/o/compras.png?alt=media&token=887a88d8-05d4-43f6-8df2-b5195120f742" alt="" />
        <p>  {cantidadServicios()}</p>
        </Link>
    </div>
  )
}

export default CartWidget
