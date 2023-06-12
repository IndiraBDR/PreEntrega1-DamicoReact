
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/Productos';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import  { useNavigate } from 'react-router-dom';
/*
/Users/indiradamico/Desktop/practica-mi-primera-app/src/components/ItemList
src/components/ItemListContainer
*/

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const navigate= useNavigate();
   

    useEffect(() => {
      getProducts()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));}
      , []);
  

   
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemList listaProductos={listaProductos.map(item =>({
          ...item,
          onProductClicked:()=> navigate(`/product-detalle/${item.id}`)

        }))}/>
      </div>
    );
  };
  
  export  {ItemListContainer};
  
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