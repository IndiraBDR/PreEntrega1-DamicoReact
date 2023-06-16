
import React from 'react';
import Item from '../Item/Item'


 const ItemList = ({listaProductos }) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexwrap: 'wrap',
          width: '90%'
        }}
      >
    
        {listaProductos.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}
       
      </div>
    );
  };
  
  export default ItemList 