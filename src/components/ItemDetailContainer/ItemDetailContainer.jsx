import { useEffect, useState } from "react"
import { getProducts } from "../../productos/Productos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () =>{

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

}