// const numerUno = 15;
// const numeroDos = 17;

// const resultado = numerUno + numeroDos;

// console.log(resultado)

// const saludo = "Hola";
// const nombre = "Juan";

// const mensaje = `${saludo} ${nombre} Bienvenido`

// console.log(mensaje)

// let numero = parseInt(prompt("Ingrese un numero:"));

// let resultado = alert(`El resultado es ${numero + 5}`);

// console.log(resultado)


// let variable1 = parseInt(prompt("Ingresa un numero:"))
// let variable2 = parseInt(prompt("Ingresa otro numero:"))

// let multiplicacion = `El producto es ${variable1 * variable2}`
// alert(multiplicacion)
// console.log(multiplicacion)

const producto = (param1,param2) => {
    return param1*param2
}

const valor1 = prompt("Ingrese un valor:");
const valor2 = prompt("Ingrese otro valor:")

const multiplicacion = `El resultado es ${producto(valor1,valor2)}`
alert(multiplicacion)
console.log(multiplicacion)



