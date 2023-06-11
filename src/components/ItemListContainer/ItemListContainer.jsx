
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../productos/Productos';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css'



const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
   

    useEffect(() => {
      getProducts()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));}
      , []);
  

   
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemList listaProductos={listaProductos}/>
      </div>
    );
  };
  
  export default ItemListContainer;
  
/*

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="greeting">
                {greeting}
            </div>
        </>
    )
}

export default ItemListContainer
*/