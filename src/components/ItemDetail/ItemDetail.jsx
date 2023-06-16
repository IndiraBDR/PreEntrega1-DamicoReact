
import { ItemCounter } from "../../components/index";


export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen,id,cantidad} = productoDetallado;

const onAdd = (cantidadDelCounter) => {
    console.log(`Compraste ${cantidadDelCounter} items`);
  };


return(

    <div className="card"
    style={{ width: '20rem', height: '23rem', margin: 'auto', alignSelf: 'center' }}>
        <p>{id}</p>
        <h2>{nombre}</h2>
        <img src={imagen} />
        <p>{descripcion}</p>
        <b>{precio}</b>
        <ItemCounter stock={cantidad} initial={1}  onAdd={onAdd} />
    </div>
)


}