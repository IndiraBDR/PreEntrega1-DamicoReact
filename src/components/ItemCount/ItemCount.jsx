
export const ItemCounter = () =>{

    const[counter, setCounter]= useState(0)

    const sumarProducto = (stock) =>{

        if(counter < stock || counter != 0){

        setCounter(counter+1)

        }

    }

    const restarProducto = (stock) =>{

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