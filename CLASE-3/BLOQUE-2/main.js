//FUNCIONES CONSTRUCTORAS
//EJEMPLO 1

// function Persona(info) {
//     this.nombre = info.nombre;
//     this.edad = info.edad;
//     this.direccion = info.direccion;
// };

// const persona1 = new Persona({
//     nombre : "pepito",
//     edad : 45,
//     direccion : "C/ Alta 111"
// });

// console.log(persona1);

// for(const clave in persona1){
//     console.log("clave" ,clave);
//     console.log("valor", persona1[clave]);
// };

//EJEMPLO 2

class Producto {
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
    }
    vender(){
        this.vendido = true
    };
};

const producto1 = new Producto("Monitor Gaming ASIS", "150€", "http://asd");
const producto2 = new Producto("Monitor Gaming MSI", "250€", "http://asdfg")

console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);