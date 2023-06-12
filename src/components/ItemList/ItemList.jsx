
import React from 'react';
import Item from '../Item/Item'


 const ItemList = ({listaProductos }) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
    
        {listaProductos.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}
       
      </div>
    );
  };
  
  export default ItemList 