//EJEMPLO 1

const producto = (param1,param2) => {
    return param1*param2
}

const valor1 = prompt("Ingrese un valor:");
const valor2 = prompt("Ingrese otro valor:")

const multiplicacion = `El resultado es ${producto(valor1,valor2)}`
alert(multiplicacion)

//EJEMPLO 2

// const saludar = () => {
//     const nombre = prompt("Ingrese su nombre");
//     const mensaje = `Hola ${nombre}`;
//     alert(mensaje);
// };

// saludar();

//EJEMPLO 3

// const saludar = (saludo, nombre) => {
//     console.log(`${saludo} ${nombre}, un gusto`)
// }

// saludar("Hola", "Christopher")
// saludar("Bienvenido", "Julio")