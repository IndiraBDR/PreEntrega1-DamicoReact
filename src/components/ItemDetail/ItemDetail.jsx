



export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen} = productoDetallado


return(

    <div>
        <h2>{nombre}</h2>
        <img src={imagen} />
        <p>{descripcion}</p>
        <b>{precio}</b>
    </div>
)


}