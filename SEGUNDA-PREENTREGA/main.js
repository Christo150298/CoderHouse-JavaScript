// Array de objetos con los coches en stock
const stock = [
    { 
      marca: "Toyota", 
      modelos: ["Corolla", "Yaris", "Camry"], 
      año: 2021, 
      precio: 25000 
    },
    { 
      marca: "Honda", 
      modelos: ["Civic", "Accord", "HR-V"], 
      año: 2022, 
      precio: 25000 
    },
    { 
      marca: "Ford", 
      modelos: ["Mustang", "Focus", "Explorer"], 
      año: 2023, 
      precio: 25000 
    },
    { 
      marca: "Opel", 
      modelos: ["Astra", "Corsa", "Insignia"], 
      año: 2020, 
      precio: 25000 
    },
    { 
      marca: "Volkswagen", 
      modelos: ["Golf", "Polo", "Passat"], 
      año: 2021, 
      precio: 28000 
    },
    { 
      marca: "BMW", 
      modelos: ["X5", "3 Series", "7 Series"], 
      año: 2022, 
      precio: 50000 
    },
    { 
      marca: "Mercedes-Benz", 
      modelos: ["C-Class", "E-Class", "S-Class"], 
      año: 2023, 
      precio: 45000 
    },
    { 
      marca: "Audi", 
      modelos: ["A3", "A4", "Q5"], 
      año: 2020, 
      precio: 32000 
    },
    { 
      marca: "Chevrolet", 
      modelos: ["Camaro", "Malibu", "Equinox"], 
      año: 2022, 
      precio: 35000 
    },
    { 
      marca: "Hyundai", 
      modelos: ["Tucson", "Santa Fe", "Elantra"], 
      año: 2020, 
      precio: 22000 
    }
  ];
  
// Función para obtener los datos del usuario
const obtenerDatos = () => {
  const marca = prompt("Ingresa la marca del coche:");
  const modelo = prompt("Ingresa el modelo del coche:");

  return { marca, modelo };
};

// Función para mostrar los resultados de la búsqueda
const resultadosBusqueda = (cocheEncontrado, cocheConDescuento) => {
  if (cocheEncontrado) {
    let mensaje = `Estás de suerte! Tenemos ese coche en stock.\nMarca: ${cocheEncontrado.marca}\nModelo: ${cocheEncontrado.modelos.join(", ")}\nAño: ${cocheEncontrado.año}\nPrecio: ${cocheEncontrado.precio}€`;

    if (cocheConDescuento) {
      mensaje += `\n¡Este coche tiene un descuento aplicado del 15%! Precio con descuento: ${cocheConDescuento.precio}€`;
    }

    alert(mensaje);
  } else {
    alert("Lo siento, no tenemos ese coche en stock.");
  };
};

// Función principal (comprobarStock)
const comprobarStock = () => {
  const { marca, modelo } = obtenerDatos();

  const cocheEncontrado = stock.find(
    (coche) => coche.marca === marca && coche.modelos.includes(modelo)
  );

  // Filtrar y aplicar descuento a los coches cuyo año de fabricacion sea anterior a 2022
  const cochesDescuento = stock
    .filter((coche) => coche.año < 2022)
    .map((coche) => {
      const descuento = coche.precio * 0.15;
      const precioDescuento = coche.precio - descuento;
      return { ...coche, precio: precioDescuento };
    });

  const cocheConDescuento = cochesDescuento.find(
    (coche) => coche.marca === marca && coche.modelos.includes(modelo)
  );

  resultadosBusqueda(cocheEncontrado, cocheConDescuento);
};

// Llamada a la función principal
comprobarStock();
