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
      año: 2021, 
      precio: 27000 
    }
  ];
  
// Función para comprobar si un coche está en stock
const comprobarStock = () => {
    
    const marca = prompt("Ingresa la marca del coche:");
    const modelo = prompt("Ingresa el modelo del coche:");
  
    let encontrado = false;
    let precio = 0;

    for (let i = 0; i < stock.length; i++) {
      if (stock[i].marca === marca && stock[i].modelos.includes(modelo)) {
        encontrado = true;
        precio = stock[i].precio;
        break;
      };
    };
  
    if (encontrado) {
      alert(`Estas de Suerte!, tenemos ese coche en stock. El precio del vehículo es: ${precio}€.`);
    } else {
      alert("Lo siento, no tenemos ese coche en stock.");
    };
  };
  
comprobarStock();