import React from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div className="contenedor-item-count">
      <div className="item-count">
        <div className="sumador">
          <button className="boton-contador" onClick={handleRestar}>
            -
          </button>
          <span className="cantidad">{cantidad}</span>
          <button className="boton-contador" onClick={handleSumar}>
            +
          </button>
        </div>
      </div>
      <button className="agregar-carrito" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;