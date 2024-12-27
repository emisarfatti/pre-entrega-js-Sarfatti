// Array de productos
const productos = [
  { id: 1, categoria: "Remeras", nombre: "Super Remera", precio: 10000 },
  { id: 2, categoria: "Buzos", nombre: "Super Buzo", precio: 15000 },
  { id: 3, categoria: "Pantalones", nombre: "Super Pantalón", precio: 20000 },
  { id: 4, categoria: "Zapatillas", nombre: "Super Zapatillas", precio: 25000 },
];

// Función para mostrar las categorías y seleccionar una
function seleccionarCategoria() {
  let categorias = [...new Set(productos.map(p => p.categoria))]; // Extrae categorías únicas
  let seleccion = prompt(
    `Elige una categoría:\n${categorias.map((c, i) => `${i + 1}. ${c}`).join("\n")}`
  );
  let indice = parseInt(seleccion) - 1;
  return categorias[indice];
}

// Función para listar productos en la categoría seleccionada
function listarProductos(categoria) {
  let disponibles = productos.filter(p => p.categoria === categoria);
  let seleccion = prompt(
    `Productos disponibles en ${categoria}:\n${disponibles
      .map(p => `${p.id}. ${p.nombre} - $${p.precio}`)
      .join("\n")}`
  );
  return disponibles.find(p => p.id === parseInt(seleccion));
}

// Función para realizar la compra
function realizarCompra() {
  let continuar = true;
  while (continuar) {
    let categoria = seleccionarCategoria();
    if (!categoria) {
      alert("Selección inválida. Por favor, intenta de nuevo.");
      continue;
    }

    let producto = listarProductos(categoria);
    if (!producto) {
      alert("Producto no encontrado. Intenta nuevamente.");
      continue;
    }

    let cantidad = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad inválida. Intenta nuevamente.");
      continue;
    }

    alert(
      `¡Gracias por tu compra!\nProducto: ${producto.nombre}\nCantidad: ${cantidad}\nPrecio Total: $${producto.precio * cantidad}`
    );

    continuar = confirm("¿Deseás realizar otra compra?");
  }
}

// Llamada inicial
realizarCompra();
