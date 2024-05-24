

const productoLista = () =>{
    return fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const crearProductos = (nombre, precio, imagen) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            precio,
            imagen,
        }),
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const borrarProducto = (id) => {
    return fetch(`${"http://localhost:3000/products"}/${id}`, {
        method:"DELETE"
    })
        .then(res => res.json())
        .catch((err) => console.log(err));
};
export const servicioProducto = {
    productoLista,
    crearProductos,
    borrarProducto,
};