
import React from 'react';
import Item from '../../ItemListContainer/Item/Item'


export const ItemList = ({listaProductos }) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
    
        {listaProductos.map((producto) => (
         
         <Item producto={producto} key={producto.id}/>

        
          
        ))}
       
      </div>
    );
  };
  
