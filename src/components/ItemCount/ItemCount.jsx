import { useState } from "react";

 
export const ItemCounter = ({ stock, initial, onAdd }) =>{

    const[counter, setCounter]= useState(initial)

    const sumarProducto = () =>{

        if(counter < stock ){

        setCounter(counter+1)

        }

          

    }

    const restarProducto = () =>{

        if(counter > 0){

        setCounter(counter-1)

        }

       

    }

    return (
        <>
          <div>

            <button className="btn btn-dark" onClick={restarProducto}>
              -
            </button>


            <span className="btn ">{counter}</span>


            <button className="btn btn-dark" onClick={sumarProducto}>
              +
            </button>

          </div>
          <button
            className="btn btn-dark"
            disabled={counter === 0 || stock === 0}
            onClick={() => onAdd(counter)}

          >
            Comprar
          </button>
        </>
      );




};