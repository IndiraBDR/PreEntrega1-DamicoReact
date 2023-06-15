
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/Productos';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import  { useNavigate,useParams } from 'react-router-dom';
/*
/Users/indiradamico/Desktop/practica-mi-primera-app/src/components/ItemList
src/components/ItemListContainer
*/

const ItemListContainer = ({ greeting }) => {


    const [listaProductos, setListaProductos] = useState([]);
    const navigate= useNavigate();
    const{catId}=useParams
   

    useEffect(() => {
      if(catId) {

        getProducts(catId)
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));

      }else{

        getProducts()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));


      };}
      , [catId]);
  

   
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






/*ANTES DE PROBAR LO DE LAURA

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
  







*/



  
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