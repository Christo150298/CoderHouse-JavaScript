// for(let i = 0; i <100; i++){
//     console.log(i);
// }

// const numero = parseInt(prompt("Ingrese un numero: "))

//EJEMPLO 1

// for(let i = 1; i <= 12; i++){
//     const resultado = numero * i
//     alert(`${numero} * ${i} = ${resultado}`)
// }

//EJEMPLO 2

// for( turno = 1; turno <= 7; turno++){
//     const nombre = prompt("Ingrese su nombre: ")
//     alert(`Turno #${turno} Nombre ${nombre}`)
// }
//EJEMPLO 3

// for(let i = 1; i < 100; i++){
//     if(i % 2 === 1){
//         continue
//     };
//     console.log(i)
// } 

//EJEMPLO 4

// const usuario = prompt("Ingrese su nombre: ")

// while(usuario !== "Christopher") {
//     alert("Usuario Incorrecto");
//     prompt("Ingrese su nombre: ");
// }

//EJEMPLO 5

// const moneda = "sol"

// switch(moneda){
// //     case "sol":
// //         console.log("Moneda de Perú");
// //         break;
// //     case "Peso Chileno":
// //         console.log("Moneda de Chile");
// //         break;
// //     case "Peso colombiano":
// //         console.log("Moneda de Colombia");
// //         break;
// // }

//CALCULADORA
// const continuar = true
// while(continuar){
//     numero1 = parseFloat(prompt("Ingrese un numero: "));
//     numero2 = parseFloat(prompt("Ingrese otro numero: "));
//     operacion = prompt("Ingrese el operador que desea utilizar (+ , * , - , / , %)")
//     switch(operacion){
//         case "*":
//             alert(`El resultado es ${numero1 * numero2}`);
//             break;
//         case "+":
//             alert(`El resultado es ${numero1 + numero2}`);
//             break;
//         case "-":
//             alert(`El resultado es ${numero1 - numero2}`);
//             break;
//         case "/":
//             if(numero2 != 0){
//                 alert(`El resultado es ${numero1 / numero2}`)
//             } else{
//                 alert("No se puede dividir entre 0")
//             }
//             break;
//         default:
//             alert("Operador incorrecto")
//     }
//     respuesta = prompt("Quiere continuar? si quiere continuar pulse S, de lo contrario N");
//     respuesta = respuesta.toUpperCase();
//     if(respuesta == "N"){
//         continuar = false
//     }
// }

//NUMEROS PRIMOS

