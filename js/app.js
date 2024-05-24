
import { servicioProducto } from "./servicios.js";

const contenedorProducto = document.querySelector("[data-producto]");
const formulario = document.querySelector("[data-form]");

function createcard(nombre, precio, imagen, id) {
    const card = document.createElement("div");
    card.classList.add("cabesones");
    card.innerHTML = `
        <img class="cabesones_imagen" src="${imagen}" alt="${nombre}">
        <div class="cabesones_informacion">
        <p class="cabesones_nombre">${nombre}</p>
        <p class="cabesones_precio">$ ${precio}</p>
        <button class="icono_borrar" data-id="${id}">
        <div class="icono_basurero">
        <img src="./imagenes/🦆 icon _trash 2_.png" alt="Eliminar">
        </div>
        </button>    
        </div>`;
    const botonBorrar = card.querySelector("icono_borrar");
    botonBorrar.addEventListener("click", () => {
        servicioProducto.borrarProducto(id)
            .then(() => {
                card.remove();
            })
            .catch(err => console.log(err));
    });
    contenedorProducto.appendChild(card);
    return card;
};

const render = async () => {
    try {
        const listaProductos = await servicioProducto.productoLista();
        listaProductos.forEach(productos => {
            contenedorProducto.appendChild(
                createcard(
                    productos.nombre,
                    productos.precio,
                    productos.imagen,
                    productos.id)
            );
        });
    } catch (error) {
        console.log(error);
    }
};
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    servicioProducto.crearProductos(nombre, precio, imagen)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
});
render();