
import { ItemCounter } from "../../components/index";

import './ItemDetail.css'


export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen,id,cantidad} = productoDetallado;

const onAdd = (cantidadDelCounter) => {
    console.log(`Compraste ${cantidadDelCounter} items`);
  };


return(

    <div className="card"
    style={{ width: '15rem', height: '32rem', alignSelf: 'center' }}>
        <div class="card-body">
        <p>{id}</p>
        <b class="card-title">{nombre}</b>
        <img  src={imagen} class="card-img-top"/>
        <p class="card-text">{descripcion}</p>
        <b class="card-text">{precio}</b>
        <ItemCounter stock={cantidad} initial={1}  onAdd={onAdd} />
        </div>
    </div>
)


}