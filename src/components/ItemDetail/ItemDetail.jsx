



export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen,id} = productoDetallado


return(

    <div>
        <p>{id}</p>
        <h2>{nombre}</h2>
        <img src={imagen} />
        <p>{descripcion}</p>
        <b>{precio}</b>
    </div>
)


}