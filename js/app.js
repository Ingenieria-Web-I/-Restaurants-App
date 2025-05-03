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