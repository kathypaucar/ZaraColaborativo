import '../css/carrito.css';

class Producto {
    constructor(id, nombre, precio, imagen){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
    }
}

//coleccion de productoa
const productos=[
    new Producto(1, "Vestido", 120, "👗" ),
    new Producto(2, "Abrigo", 75, "🧥" ),
    new Producto(3, "Pantalón", 50, "👖" ),
    new Producto(4, "Blusa", 80, "👚" ),
    new Producto(5, "Zapatos", 100, "👠" ),
]

let carrito =[];

//seleccionar los elementos html
const catalogo = document.getElementById("catalogo-estante");
const listaProductos = document.getElementById("lista-carrito");
const totalPago = document.getElementById("total-precio");

//funcion para mostrar los productos en el catalogo
const cargarCatalogo = () =>{
    productos.forEach(p => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
            <h2>${p.imagen}</h2>
            <h3>${p.nombre}</h3>
            <p>${p.precio}</p>
            <button onclick="agregarCarrito(${p.id})">Agregar</button>
        `;
        catalogo.appendChild(div);
    });
}

//Funcion para agregar producto al carrito
const agregarCarrito = (id) =>{
    const productoEncontrado=productos.find(p => p.id === id );
    carrito.push(productoEncontrado);
    actualizarCarrito()
}

//funcion para actualizar la vista del carrito
const actualizarCarrito = ()=>{
    listaProductos.innerHTML=""; //limpiar el carrito
    let sumaTotal = 0;

    carrito.forEach((p, index)=>{
        sumaTotal += p.precio;
        const li = document.createElement('li');
        li.innerHTML=`
            ${p.nombre} - ${p.precio}
            <button style="background:red" onclick="eliminarProducto(${index})">X</button>
        `;
        listaProductos.appendChild(li);
    });
    totalPago.textContent=sumaTotal;
}

//funcion para eliminar un producto del carrito
const eliminarProducto = (id) =>{
    carrito.splice(id, 1);
    actualizarCarrito();
}

//funcion para vaciar el carrito
const vaciarCarrito = () => {
    carrito = [];
    actualizarCarrito();
}

//
const botonVaciar= document.getElementById("btn-vaciar");
botonVaciar.addEventListener('click', vaciarCarrito);

cargarCatalogo();
//que la funcion sea global
window.agregarCarrito = agregarCarrito;
window.eliminarProducto = eliminarProducto;