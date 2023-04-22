// const nombre = "Juan"

// console.log(nombre == "Pedro")

// const respuesta = prompt("Terminaste la tarea? ").toLocaleLowerCase()

// if(respuesta === "si") {
//     alert("Puedes salir a Jugar!!")
// }
// else{
//     alert("No puedes salir a jugar!!")
// }

// const numeroInvitados = parseInt(prompt("Cuantas personas iran a tu boda?"))

// if(numeroInvitados <= 500){
//     alert("Tu presupuesto es de 2500$")
// }
// else if(numeroInvitados <= 1000){
//     alert("Tu presupuesto es de 3500$")
// }
// else if(numeroInvitados <= 2000){
//     alert("Tu prespuesto es de 5000$")
// }
// else{
//     alert("Tu presupuesto es de 6000$")
// }


// const precioPorPersona = (valor) => {
//     return valor*20
// }
// const numeroInvitados = parseInt(prompt("Cuantas personas iran a tu boda?"))

// const presupuestoFinal = `Tu presupuesto es de ${precioPorPersona(numeroInvitados)}$`
// alert(presupuestoFinal)

const nombre = prompt("Ingrese un nombre: ")
const apellido =prompt("Ingrese su apellido: ")

if(nombre != "" && apellido != "") {
    alert(`Bienvenido ${nombre} ${apellido}`)
} else{
    alert("Por favor ingrese su nombre completo")
}






