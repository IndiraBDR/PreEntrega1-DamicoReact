

const productos =
    [
        {
            id: 1,
            nombre: "Asesoria inicial",
            descripcion:"yyyy",
            precio: 1000, 
            imagen: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
            cantidad: "5"
        },

        {
            id: 2,
            nombre: "Asesoria personalizada",
            descripcion:"xxxxx",
            precio: 2000, 
            imagen: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
            cantidad: "6"

        },

        {
            id: 3,
            nombre: "Asesoria para empresas",
            descripcion: "aaaaa",
            precio: 4000, 
            imagen: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
            cantidad: "9"
        }


    ]


const getProducts = () => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(productos);
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};




export { getProducts }