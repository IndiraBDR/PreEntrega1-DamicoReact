import { useEffect, useState } from "react"
import { getProducts,getProduct } from "../../services/Productos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

 const ItemDetailContainer = () =>{


  const {id}= useParams();

  const [productoDetallado,setproductoDetallado]= useState({})

  useEffect ( ()=> {

    getProduct(id)
    .then((res)=>setproductoDetallado(res))
   
    

  },[])

 

    return(

        
       <>
        <ItemDetail productoDetallado={productoDetallado}/>
        </>
        
      
    )

    

}


export {ItemDetailContainer};


/*

const [productoDetallado,setproductoDetallado]= useState({})


  useEffect ( ()=> {

    getProducts()
    .then((res)=>setproductoDetallado(res.find((producto)=>producto.id === 2)))
    .catch((err)=> console.log(err))

  },[])


  return(

        <>
        <ItemDetail productoDetallado={productoDetallado}/>
        </>
    )
*/