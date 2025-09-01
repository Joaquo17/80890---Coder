
const productos = [
  { id: 1, nombre: "Notebook Lenovo", precio: 250000, img: "https://pccenter.com.ar/cdn/shop/files/FotoxdsTiendaOnline333_1.jpg?v=1726672019" },
  { id: 2, nombre: "iPhone 16 Pro", precio: 600000, img: "https://bioscomputacion.com.ar/img/Public/1161/81758-producto-asset-mms-144638860.jpg" },
  { id: 3, nombre: "Auriculares inalámbricos", precio: 35000, img: "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_20flight_1_main.jpg?v=1662435222" },
  { id: 4, nombre: "Smartwatch", precio: 80000, img: "https://acdn-us.mitiendanube.com/stores/001/145/546/products/w17-final-d10e76d756e216785417020688225996-1024-1024.jpg" },
  { id: 5, nombre: "Monitor Gamer", precio: 120000, img: "https://pccenter.com.ar/cdn/shop/files/FotosTiejikndaOnline.jpg?v=1737379548" },
  { id: 6, nombre: "Teclado Mecánico", precio: 45000, img: "https://acdn-us.mitiendanube.com/stores/001/593/734/products/nkb-68-angulo-aceb2a184cf4194d8217507922791059-1024-1024.jpg" }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


const contenedorProductos = document.getElementById("productos");

function mostrarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(div);
  });
}

mostrarProductos();


function agregarAlCarrito(id) {
  const item = productos.find(prod => prod.id === id);
  carrito.push(item);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}


const carritoSection = document.getElementById("carritoSection");
const carritoItems = document.getElementById("carritoItems");
const total = document.getElementById("total");

function mostrarCarrito() {
  carritoItems.innerHTML = "";
  let totalCompra = 0;
  carrito.forEach((prod, index) => {
    totalCompra += prod.precio;
    const div = document.createElement("div");
    div.innerHTML = `
      ${prod.nombre} - $${prod.precio}
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    carritoItems.appendChild(div);
  });
  total.textContent = `Total: $${totalCompra}`;
}


function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}


document.getElementById("vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});


document.getElementById("verCarrito").addEventListener("click", () => {
  carritoSection.classList.toggle("oculto");
});

mostrarCarrito();
