import React from 'react';

 const Item = ({ producto}) => {

  //    <img src={imagen.producto}  alt={producto.nombre} /> VA DWENTRO DEL RETURN
    
    return (
      <div>
    
        <div >
          <p>{producto.nombre}</p>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <p>stock: {producto.cantidad}</p>
        
        </div>
  
        <button>Ver más</button>
      </div>
    );
  };
  
  export default Item;


