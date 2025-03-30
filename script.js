// Arreglo para la lista de compras
let listaDeCompras = [];

// Función para agregar producto
const agregarProducto = (producto) => {
  if (producto.trim() === "") {
    alert("Ingrese un producto válido.");
    return;
  }
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    actualizarLista();
  } else {
    alert(`${producto} ya está en la lista.`);
  }
};
