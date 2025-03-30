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

// Función para eliminar producto
const eliminarProducto = (producto) => {
  listaDeCompras = listaDeCompras.filter((item) => item !== producto);
  actualizarLista();
};

// Función para mostrar la lista de compras
const actualizarLista = () => {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  listaDeCompras.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = producto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar-btn";
    btnEliminar.onclick = () => eliminarProducto(producto);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
};

// Función para agregar producto desde input
const agregarDesdeInput = () => {
  const input = document.getElementById("productoInput");
  agregarProducto(input.value);
  input.value = "";
};
