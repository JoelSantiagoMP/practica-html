// 1. Obtener ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 2. Base de datos de productos
const productos = {
    "camiseta-roja": {
        nombre: "Camiseta deportiva roja",
        precio: 45000,
        img: "../img/camisetas1.jpg",
        descripcion: "Tela transpirable, ideal para entrenamientos."
    },

    "camiseta-azul": {
        nombre: "Camiseta deportiva azul Dri-Fit",
        precio: 48000,
        img: "../img/camisetas2.jpg",
        descripcion: "Material Dri-Fit de alta calidad, ligera y fresca."
    },

    "camiseta-negra": {
        nombre: "Camiseta deportiva negra",
        precio: 40000,
        img: "../img/camisetas3.jpg",
        descripcion: "Camiseta negra de alta calidad tela transpirable, perfecta para el gimnasio."
    },

    "camiseta-blanca": {
        nombre: "Camiseta deportiva blanca",
        precio: 50000,
        img: "../img/camisetas4.jpg",
        descripcion: "Camiseta blanca de alta calidad tela transpirable, para ir al gimnasio es fantástica."
    },

    "camiseta-magenta": {
        nombre: "Camiseta deportiva magenta",
        precio: 45000,
        img: "../img/camisetas5.jpg",
        descripcion: "Camiseta deportiva magenta de alta calidad para dama."
    },

    "camiseta-verde": {
        nombre: "Camiseta deportiva verde",
        precio: 35000,
        img: "../img/camisetas5.jpg",
        descripcion: "Camiseta deportiva verde unisex de alta calidad para gimnasio."
    },

    "nba-lakers": {
        nombre: "L.A Lakers",
        precio: 60000,
        img: "../img/nba1.jpg",
        descripcion: "Uniforme de NBA del equipo estadounidense Los Angeles Lakers, calidad importada todas las tallas."
    },

    "nba-chicago-bulls": {
        nombre: "Chicago Bulls",
        precio: 60000,
        img: "../img/nba2.jpg",
        descripcion: "Uniforme de NBA del equipo estadounidense Chicago Bulls, calidad importada todas las tallas."
    },

    "nba-golden-state-warriors": {
        nombre: "Golden State Warriors",
        precio: 60000,
        img: "../img/nba3.jpg",
        descripcion: "Uniforme de NBA del equipo estadounidense Golden State Warriors, calidad importada todas las tallas."
    },

    
};

// 3. Verificar si el producto existe
const producto = productos[id];

if (!producto) {
    document.body.innerHTML = "<h2>Producto no encontrado</h2>";
} else {
    // 4. Rellenar el HTML automáticamente
    document.getElementById("titulo-producto").textContent = producto.nombre;
    document.getElementById("img-producto").src = producto.img;
    document.getElementById("precio").textContent = "$" + producto.precio;
    document.getElementById("descripcion").textContent = producto.descripcion;
}
