

let productos = [
  { id: 1, nombre: 'Chocolates', precio: 2000 },
  { id: 2, nombre: 'Caramelos', precio: 500 },
  { id: 3, nombre: 'Gomitas', precio: 1200 }
]; 

let carrito = [];


function solicitarNombre() {
  let nombre = prompt('Ingresa tu nombre:');
  console.log('Bienvenido,', nombre);
  return nombre;
}


function agregarAlCarrito() {
  let continuar = true;
  while (continuar) {
    let mensaje = 'Elegí un producto:\n';
    productos.forEach(p => {
      mensaje += `${p.id}. ${p.nombre} ($${p.precio})\n`;
    });
    let eleccion = parseInt(prompt(mensaje));
    let producto = productos.find(p => p.id === eleccion);
    if (producto) {
      carrito.push(producto);
      console.log(`${producto.nombre} agregado.`);
    } else {
      console.log('Opción inválida.');
    }
    continuar = confirm('¿Queres agregar otro producto?');
  }
}


function calcularTotal() {
  return carrito.reduce((suma, p) => suma + p.precio, 0);
}



function finalizarCompra(nombre, total) {
  let mensaje = `Hola ${nombre}, tu total es $${total}.\n¿Deseas finalizar la compra?`;
  if (confirm(mensaje)) {
    alert('¡Compra realizada!');
  } else {
    alert('Compra cancelada');
  }
}


let usuario = solicitarNombre();
agregarAlCarrito();
let total = calcularTotal();
finalizarCompra(usuario, total);