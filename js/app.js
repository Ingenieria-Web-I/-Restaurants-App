document.addEventListener("DOMContentLoaded", () => {
  const yaCargado = localStorage.getItem("restaurantesIniciales");
  if (!yaCargado) {
    const predefinidos = [
      {
        nombre: "La Parrilla de Juan",
        descripcion: "Especialidad en carnes a la brasa.",
        direccion: "Calle 123, Ciudad",
        imagen: "img/restaurante1.jpg"
      },
      {
        nombre: "Sushi Express",
        descripcion: "Delicioso sushi y comida japonesa.",
        direccion: "Av. Central 456",
        imagen: "img/restaurante2.jpg"
      },
      {
        nombre: "Pizzería Italia",
        descripcion: "Auténtica pizza italiana al horno.",
        direccion: "Carrera 78, Zona Norte",
        imagen: "img/restaurante3.jpg"
      }
    ];
    localStorage.setItem("restaurantes", JSON.stringify(predefinidos));
    localStorage.setItem("restaurantesIniciales", "true");
  }
  if (document.getElementById("lista-restaurantes")) mostrarRestaurantes();
});

function guardarRestaurante(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const imagen = document.getElementById("imagen").value.trim() || "img/restaurante1.jpg";

  const nuevo = { nombre, descripcion, direccion, imagen };
  const lista = JSON.parse(localStorage.getItem("restaurantes")) || [];
  lista.push(nuevo);
  localStorage.setItem("restaurantes", JSON.stringify(lista));
  alert("Restaurante guardado correctamente.");
  window.location.href = "index.html";
}

function mostrarRestaurantes() {
  const lista = JSON.parse(localStorage.getItem("restaurantes")) || [];
  const contenedor = document.getElementById("lista-restaurantes");
  contenedor.innerHTML = lista.map(r => `
    <div class="col-md-4">
      <div class="card mb-4">
        <img src="${r.imagen}" class="card-img-top" alt="${r.nombre}">
        <div class="card-body">
          <h5 class="card-title">${r.nombre}</h5>
          <p class="card-text">${r.descripcion}</p>
          <p><strong>Dirección:</strong> ${r.direccion}</p>
        </div>
      </div>
    </div>
  `).join("");
}

function buscarRestaurante() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const lista = JSON.parse(localStorage.getItem("restaurantes")) || [];
  const encontrado = lista.find(r => r.nombre.toLowerCase().includes(input));
  const resultado = document.getElementById("resultadoBusqueda");
  if (encontrado) {
    resultado.innerHTML = `
      <div class="card mx-auto" style="max-width: 400px;">
        <img src="${encontrado.imagen}" class="card-img-top" alt="${encontrado.nombre}">
        <div class="card-body">
          <h5 class="card-title">${encontrado.nombre}</h5>
          <p>${encontrado.descripcion}</p>
          <p><strong>Dirección:</strong> ${encontrado.direccion}</p>
        </div>
      </div>
    `;
  } else {
    resultado.innerHTML = "<p>No se encontró el restaurante.</p>";
  }
}